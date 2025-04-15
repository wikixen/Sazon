package data
// ingredient.go holds all functions related to the ingredients table

import (
	"context"
	"database/sql"

)

type Ingredient struct {
	ID          int64    `json:"id"`
	Name        string   `json:"title"`
	Ingredients []string `json:"ingredients"` // Ingredients are tied to the User by Fridge column in users
	UserID      int64    `json:"user_id"` // UserID is tied to the User by ID column in users
	Tags        []string `json:"tags"`
	CreatedAt   string   `json:"created_at"`
	UpdatedAt   string   `json:"updated_at"`
}

type IngStore struct {
	db *sql.DB
}

// Creates a ingredients table in database
func (s *IngStore) Create(ctx context.Context, ingredient *Ingredient) error {
	query := `
	INSERT INTO recipes (name, content, ingredients, user_id, tags)
	VALUES ($1,$2,$3,$4,$5) RETURNING id, created_at, updated_at
	`

	err := s.db.QueryRowContext(
		ctx,
		query,
		ingredient.Name,
		ingredient.UserID,
	).Scan(
		&ingredient.ID,
		&ingredient.CreatedAt,
		&ingredient.UpdatedAt,
	)
	if err != nil {
		return err
	}

	return nil
}