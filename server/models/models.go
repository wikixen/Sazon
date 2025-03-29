package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email       string         `json:"email" gorm:"unique"`
	Username    string         `json:"username" gorm:"unique"`
	Password    string         `json:"password" gorm:"size:"`
	Recipe      []Recipe       `gorm:"foreignKey:RecipeID"`
	Ingredients []Ingredients  `gorm:"foreignKey:IngredientID"`
	
}

type Recipe struct {
	RecipeID    uint           `json:"recipe_id" gorm:"unique; primaryKey"`
	RecipeName  string         `json:"recipe_name" gorm:"unique"`
	Ingredients Ingredients    `json:"recipe_ingredients_id" gorm:"foreignKey:IngredientID"`
	DeletedAt   gorm.DeletedAt `gorm:"index"`
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

type Ingredients struct {
	IngredientID       uint           `json:"indgredient_id" gorm:"unique; primaryKey"`
	IngredientName     string         `json:"indgredient_name" gorm:"unique"`
	DeletedAt          gorm.DeletedAt `gorm:"index"`
	CreatedAt          time.Time
	UpdatedAt          time.Time
}
