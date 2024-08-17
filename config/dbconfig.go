package config

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/helpers"
	"github.com/wikixen/sazonapp/middleware"
	"github.com/wikixen/sazonapp/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DBConnect() {
	middleware.EnvSetup()

	HOST := os.Getenv("HOST")
	DB_PORT := os.Getenv("DB_PORT")
	USER := os.Getenv("USER")
	PASSWORD := os.Getenv("PASSWORD")

	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/Users", 
		USER, 
		PASSWORD, 
		HOST, 
		DB_PORT,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	errJSON := helpers.ErrorStruct{
		Status: http.StatusBadRequest,
		Err: err,
		Ctx: &gin.Context{},
	}
	errJSON.ErrorHandler()

	db.AutoMigrate(&models.User{})
	DB = db
}
