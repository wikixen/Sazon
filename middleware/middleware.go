package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/wikixen/sazonapp/helpers"
)

// Cors sets Headers to allow CORs to work
func Cors() gin.HandlerFunc{
	return func(ctx *gin.Context) {
		ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		ctx.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		ctx.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        ctx.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PATCH, DELETE")

		if ctx.Request.Method == "OPTIONS"{
			ctx.AbortWithStatus(204)
			return
		}
		ctx.Next()
	}
}

// EnvSetup loads the godotenv package
func EnvSetup() {
	err := godotenv.Load(".env")
	errJSON := helpers.ErrorStruct{
		Status: http.StatusBadRequest,
		Err: err,
		Ctx: &gin.Context{},
	}
	errJSON.ErrorHandler()
}