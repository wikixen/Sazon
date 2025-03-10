package data
// storage.go should hold any future implementations of Storage struct
import (
	"context"
	"database/sql"
)

// Storage is struct of interfaces to allow for any future swapping of databases
type Storage struct {
	Users interface {
		Create(context.Context, *User) error
	}
	Recipes interface {
		Create(context.Context, *Recipe) error
	}
	Ingredients interface {
		Create(context.Context, *Ingredient) error
	}
}

// NewPostgresStorage creates a postgres implementation of Storage struct
func NewPostgresStorage(db *sql.DB) Storage {
	return Storage{
		Users:       &PostgresUserStore{db},
		Recipes:     &PostgresRecipeStore{db},
		Ingredients: &PostgresIngredientStore{db},
	}
}