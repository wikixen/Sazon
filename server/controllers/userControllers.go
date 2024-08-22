package controllers

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/models"
	"golang.org/x/crypto/bcrypt"
)

func GetAllUsers(ctx *gin.Context) {
	users := []models.User{}
	config.DB.Find(&users)
	ctx.JSON(http.StatusOK, &users)
}

func GetUser(ctx *gin.Context) {
	user := []models.User{}
	config.DB.Where("id = ?", ctx.Param("id")).Find(&user)
	ctx.JSON(http.StatusOK, &user)
}

func CreateUser(ctx *gin.Context) {
	// Reads json
	var body models.User
	if ctx.BindJSON(&body) != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read information provided",
		})
		return
	}

	// Hashes password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// Creates User
	user := models.User{
		Email:    body.Email,
		Username: body.Username,
		Password: string(hash),
	}

	res := config.DB.Create(&user)
	if res.Error != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": res.Error.Error(),
		})
		return
	}
	// Response
	ctx.JSON(http.StatusOK, &user)
}

func EditUser(ctx *gin.Context) {
	// Get ID
	id := ctx.Param("id")

	// Get data from req
	var body models.User
	ctx.BindJSON(&body)

	// Encrypting of password if that's submitted
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	// Find user w/ ID
	var user models.User
	config.DB.First(&user, id)

	// Update 
	config.DB.Model(&user).Updates(models.User{
		Email: body.Email,
		Username: body.Username,
		Password: string(hash),
	})

	ctx.JSON(http.StatusOK, &user)
}

func DeleteUser(ctx *gin.Context) {
	// Fetch ID
	id := ctx.Param("id")

	// Delete user
	config.DB.Delete(&models.User{}, id)

	// Response
	ctx.JSON(http.StatusOK, gin.H{
		"msg":"User deleted successfully",
	})
}

func VerifyLogin(ctx *gin.Context) {
	// Reads json
	var body struct {
		Identity string
		Password string
	}
	if ctx.BindJSON(&body) != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read information provided",
		})
		return
	}

	// Searches for user
	var user models.User
	config.DB.Where("username = ?", body.Identity).Or("email = ?", body.Identity).First(&user)

	if user.ID == 0{
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":"Invalid login info provided",
		})
		return
	}

	// Compare entered val w/ pw in DB
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":"Invalid login info provided",
		})
		return
	}

	// Gen a JWT
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour*24*30).Unix(), 
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error":"Error with token generation",
		})
	}
	ctx.SetSameSite(http.SameSiteLaxMode)

	// 1st empty string is the path, 2nd is the domain
	ctx.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)
	ctx.JSON(http.StatusOK, tokenString)
}

func Validate(ctx *gin.Context)  {
	ctx.JSON(http.StatusOK, gin.H{
		"message": "I'm logged in",
	})
}