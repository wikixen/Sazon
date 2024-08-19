package config

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// EnvSetup loads the godotenv package
func EnvSetup(ctx *gin.Context) {
	err := godotenv.Load(".env")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
}