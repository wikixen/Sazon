package models

type Recipe struct {
	recipeID            uint     `json:"recipeID" gorm:"primaryKey"`
	recipeName          string   `json:"recipeName"`
	recipeIngredientsID []int    `json:"recipeIngredientsID"`
	recipeIngredients   []string `json:"recipeIngredients"`
	userID              uint     `json:"userID"`
}