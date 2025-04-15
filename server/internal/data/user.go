package data
// user.go holds all functions related to the users table

import (
	"context"
	"database/sql"

	"github.com/lib/pq"
)

type User struct {
	ID          int64      `json:"id"`
	Username    string     `json:"username"`
	Email       string     `json:"email"`
	Password    string     `json:"-"` // Password isn't sent back
	ingredients [][]string `json:"ingredients"`
	recipes     []string   `json:"recipes"`
	CreatedAt   string     `json:"created_at"`
	UpdatedAt   string     `json:"updated_at"`
}

type UserStore struct {
	db *sql.DB
}

// Creates a users table in database
func (s *UserStore) Create(ctx context.Context, user *User) error {
	query := `
	INSERT INTO users (username, email, password, ingredients, recipes)
	VALUES ($1,$2,$3,$4,$5) RETURNING id, created_at, updated_at
	`

	err := s.db.QueryRowContext(
		ctx,
		query,
		user.Username,
		user.Email,
		user.Password,
		pq.Array(user.ingredients),
		pq.Array(user.recipes),
	).Scan(
		&user.ID,
		&user.CreatedAt,
		&user.UpdatedAt,
	)
	if err != nil {
		return err
	}

	return nil
}
