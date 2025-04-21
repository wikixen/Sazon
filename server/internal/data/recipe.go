package data

// recipe.go holds all functions related to the recipes table

import (
	"context"
	"database/sql"
	"errors"

	"github.com/lib/pq"
)

type Recipe struct {
	ID          int64    `json:"id"`
	Name        string   `json:"title"`
	Content     string   `json:"content"`
	Ingredients []string `json:"ingredients"`
	UserID      int64    `json:"user_id"` // UserID is tied to the User by ID column in users
	Tags        []string `json:"tags"`
	CreatedAt   string   `json:"created_at"`
	UpdatedAt   string   `json:"updated_at"`
	Version     int      `json:"version"`
}

type RecipeStore struct {
	db *sql.DB
}

// Creates a recipes table in database
func (s *RecipeStore) Create(ctx context.Context, recipe *Recipe) error {
	query := `
	INSERT INTO recipes (name, content, ingredients, user_id, tags)
	VALUES ($1,$2,$3,$4,$5) RETURNING id, created_at, updated_at
	`

	err := s.db.QueryRowContext(
		ctx,
		query,
		recipe.Name,
		recipe.Content,
		pq.Array(recipe.Ingredients),
		recipe.UserID,
		pq.Array(recipe.Tags),
	).Scan(
		&recipe.ID,
		&recipe.CreatedAt,
		&recipe.UpdatedAt,
	)
	if err != nil {
		return err
	}

	return nil
}

func (s *RecipeStore) GetByID(ctx context.Context, recipeID int64) (*Recipe, error) {
	query := `
		SELECT id, user_id, name, content, tags, ingredients, created_at, updated_at, version
		FROM recipes
		WHERE id = $1
		`
	ctx, cancel := context.WithTimeout(ctx, QueryTimeoutDuration)
	defer cancel()

	var recipe Recipe
	err := s.db.QueryRowContext(ctx, query, recipeID).Scan(
		&recipe.ID,
		&recipe.UserID,
		&recipe.Name,
		&recipe.Content,
		pq.Array(&recipe.Tags),
		pq.Array(&recipe.Ingredients),
		&recipe.CreatedAt,
		&recipe.UpdatedAt,
		&recipe.Version,
	)
	if err != nil {
		switch {
		case errors.Is(err, sql.ErrNoRows):
			return nil, ErrNotFound
		default:
			return nil, err
		}
	}

	return &recipe, nil
}

func (s *RecipeStore) Update(ctx context.Context, recipe *Recipe) error {
	query := `
	UPDATE recipes
	SET name = $1, content = $2, version = version + 1
	WHERE id = $3 AND version = $4
	RETURNING version
	`

	ctx, cancel := context.WithTimeout(ctx, QueryTimeoutDuration)
	defer cancel()

	err := s.db.QueryRowContext(
		ctx,
		query,
		recipe.Name,
		recipe.Content,
		recipe.ID,
		recipe.Version,
	).Scan(&recipe.Version)
	if err != nil {
		switch {
		case errors.Is(err, sql.ErrNoRows):
			return ErrNotFound
		default:
			return err
		}
	}

	return nil
}
func (s *RecipeStore) Delete(ctx context.Context, recipeID int64) error {
	query := `DELETE FROM recipes WHERE id = $1`

	ctx, cancel := context.WithTimeout(ctx, QueryTimeoutDuration)
	defer cancel()

	res, err := s.db.ExecContext(ctx, query, recipeID)
	if err != nil {
		return err
	}

	rows, err := res.RowsAffected()
	if err != nil {
		return err
	}

	if rows == 0 {
		return ErrNotFound
	}

	return nil
}

func (s *RecipeStore) GetUserRecipes(ctx context.Context, userID int64, fq PaginatedFeedQuery) ([]Recipe, error) {
	query := `
	SELECT r.id, r.user_id, r.title, r.content, r.created_at, r.version, r.tags
	FROM recipes r
	LEFT JOIN users u on r.user_id = u.id
	WHERE (r.title ILIKE '%' || $4 || '%' OR r.content ILIKE '%' || $4 || '%') AND (r.tags @> $5 OR $5 = '{}')
	GROUP BY r.id
	ORDER BY r.created_at` + fq.Sort + `
	LIMIT $2 OFFSET $3`

	ctx, cancel := context.WithTimeout(ctx, QueryTimeoutDuration)
	defer cancel()

	rows, err := s.db.QueryContext(
		ctx, 
		query, 
		userID, 
		fq.Limit, 
		fq.Offset, 
		fq.Search, 
		pq.Array(fq.Tags),
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var feed []Recipe
	for rows.Next() {
		var r Recipe
		err := rows.Scan(
			&r.ID,
			&r.UserID,
			&r.Name,
			&r.Content,
			&r.CreatedAt,
			&r.Version,
			pq.Array(&r.Tags),
		)
		if err != nil {
			return nil, err
		}

		feed = append(feed, r)
	}

	return feed, nil
}
