package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/models"
)

func GetAllRecipes(ctx *gin.Context) {
	recipes := []models.Recipe{}
	config.DB.Find(&recipes)
	ctx.JSON(http.StatusOK, &recipes)
}

func GetRecipe(ctx *gin.Context) {
	recipe := []models.Recipe{}
	config.DB.Where("id = ?", ctx.Param("id")).Find(&recipe)
	ctx.JSON(http.StatusOK, &recipe)
}

func CreateRecipe(ctx *gin.Context) {
	var recipe models.Recipe
	ctx.BindJSON(&recipe)
	config.DB.Create(&recipe)
	ctx.JSON(http.StatusOK, &recipe)
}

func EditRecipe(ctx *gin.Context) {
	var recipe models.Recipe
	config.DB.Where("id = ?", ctx.Param("id")).First(&recipe)
	ctx.BindJSON(&recipe)
	config.DB.Save(&recipe)
	ctx.JSON(http.StatusOK, &recipe)
}

func DeleteRecipe(ctx *gin.Context) {
	var recipe models.Recipe
	config.DB.Where("id = ?", ctx.Param("id")).Delete(&recipe)
	ctx.JSON(http.StatusOK, &recipe)
}
