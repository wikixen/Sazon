package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	userID   uint   `json:"userID" gorm:"primaryKey"`
	Email    string `json:"email"`
	Password string `json:"password"`
}
