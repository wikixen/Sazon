package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	userID    uint           `gorm:"type:uint;primaryKey"`
	Email     string         `gorm: "type:varchar(255)"`
	Password  string         `gorm: "type:varchar(255)"`
	CreatedAt time.Time      `json: createdAt`
	UpdatedAt time.Time      `json: updatedAt`
	DeletedAt gorm.DeletedAt `gorm:"index"`
}

type Recipe struct {
	recipeID            uint     `gorm:"type:uint;primaryKey"`
	recipeName          string   `gorm: "type:varchar(255)"`
	recipeIngredientsID []int    `gorm:"type:int"`
	recipeIngredients   []string `gorm: "type:varchar(255)"`
	userID              uint     `gorm:"type:uint"`
}

type Ingredients struct {
	indgredientID       uint   `gorm:"type:uint;primaryKey"`
	indgredientName     string `gorm: "type:varchar(255)"`
	indgredientQuantity int    `gorm:"type:int"`
	userID              uint   `gorm:"type:uint"`
}
