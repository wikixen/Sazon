package middleware

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/models"
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
func EnvSetup(ctx *gin.Context) {
	err := godotenv.Load(".env")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
}

// RequireAuth makes sure cookies are being checked while logged in
func RequireAuth(ctx *gin.Context){
	tokenString, err := ctx.Cookie("Authorization")
	if err != nil {
		ctx.AbortWithStatus(http.StatusUnauthorized)
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}

		return []byte(os.Getenv("SECRET")), nil
	})
	if err != nil {
		ctx.AbortWithStatus(http.StatusUnauthorized)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		// Check exp
		if float64(time.Now().Unix()) > claims["exp"].(float64){
			ctx.AbortWithStatus(http.StatusUnauthorized)
		}
		
		// Find user with token
		var user models.User
		config.DB.First(&user, claims["sub"])

		if user.ID == 0 {
			ctx.AbortWithStatus(http.StatusUnauthorized)
		}

		// Attach to req
		ctx.Set("user", user)
		
		// Continue
		ctx.Next()
	} else {
		ctx.AbortWithStatus(http.StatusUnauthorized)
	}

}