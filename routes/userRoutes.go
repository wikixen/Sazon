package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/helper"
	"github.com/wikixen/sazonapp/models"
)

var db, _ = config.DatabaseSetup(&gin.Context{})

func CreateUser(ctx *gin.Context) {
	var reqBody models.User
	if err := ctx.BindJSON(&reqBody); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "There was an error retrieving the request",
		})
	}
	result := db.Create(&reqBody)
	helper.ErrorHandler(result.Error, result.Error.Error(), &gin.Context{})
	
	ctx.JSON(http.StatusOK, result.RowsAffected)
}

func DeleteUser(ctx *gin.Context) {
	
}
