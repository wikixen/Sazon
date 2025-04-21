package data

// storage.go should hold any future implementations of Storage struct
import (
	"context"
	"database/sql"
	"errors"
	"time"
)

var (
	ErrNotFound          = errors.New("resource not found")
	ErrConflict          = errors.New("resource already exists")
	QueryTimeoutDuration = time.Second * 5
)

// Storage is struct of interfaces to allow for any future swapping of databases
type Storage struct {
	Recipes interface {
		GetByID(context.Context, int64) (*Recipe, error)
		Create(context.Context, *Recipe) error
		Update(context.Context, *Recipe) error
		Delete(context.Context, int64) error
		GetUserRecipes(context.Context, int64, PaginatedFeedQuery) ([]Recipe, error) //PaginatedFeedQuery is a param; PostWithMetadata is a return var
	}
	Users interface {
		GetByID(context.Context, int64) (*User, error)
		GetByEmail(context.Context, string) (*User, error)
		Create(context.Context, *User) error
		Delete(context.Context, int64) error
	}
}

// NewPostgresStorage creates a postgres implementation of Storage struct
func NewStorage(db *sql.DB) Storage {
	return Storage{
		Recipes: &RecipeStore{db},
		Users:   &UserStore{db},
	}
}
