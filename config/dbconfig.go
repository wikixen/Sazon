package config

import (
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"github.com/wikixen/sazonapp/helper"
)

func DatabaseSetup(ctx *gin.Context) (*gorm.DB, error){
	db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
	helper.ErrorHandler(err, "There was a problem connecting to the database", &gin.Context{})
	
	return db, err
}