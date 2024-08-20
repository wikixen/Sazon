package config

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DBConnect(ctx *gin.Context) {
	EnvSetup(&gin.Context{})

	HOST := os.Getenv("HOST")
	DB_PORT := os.Getenv("DB_PORT")
	USER := os.Getenv("USER")
	PASSWORD := os.Getenv("PASSWORD")

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/SazonApp", 
		USER, 
		PASSWORD, 
		HOST, 
		DB_PORT,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}

	db.AutoMigrate(&models.User{}, &models.Recipe{}, &models.Ingredients{})
	DB = db
}
