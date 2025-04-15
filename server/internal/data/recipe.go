package data
// recipe.go holds all functions related to the recipes table

import (
	"context"
	"database/sql"

	"github.com/lib/pq"
)

type Recipe struct {
	ID          int64    `json:"id"`
	Name        string   `json:"title"`
	Content     string   `json:"content"`
	Ingredients []string `json:"ingredients"` // Ingredients are tied to the User by Fridge column in users
	UserID      int64    `json:"user_id"` // UserID is tied to the User by ID column in users
	Tags        []string `json:"tags"`
	CreatedAt   string   `json:"created_at"`
	UpdatedAt   string   `json:"updated_at"`
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
		recipe.Tags,
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


// func (s *LiteStore) Delete(ctx context.Context, recipe *Recipe) error {
// 	query := `DELETE FROM recipes WHERE id = $1`

// 	// ctx, cancel := context.WithTimeout(ctx, QueryTimeoutDuration)
// 	defer cancel()

	
// 	return nil
// }