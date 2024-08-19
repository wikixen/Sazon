package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/models"
)

func GetAllIngredients(ctx *gin.Context) {
	ingredients := []models.Ingredients{}
	config.DB.Find(&ingredients)
	ctx.JSON(http.StatusOK, &ingredients)
}

func GetIngredient(ctx *gin.Context) {
	ingredient := []models.Ingredients{}
	config.DB.Where("id = ?", ctx.Param("id")).Find(&ingredient)
	ctx.JSON(http.StatusOK, &ingredient)
}

func CreateIngredient(ctx *gin.Context) {
	var ingredient models.Ingredients
	ctx.BindJSON(&ingredient)
	config.DB.Create(&ingredient)
	ctx.JSON(http.StatusOK, &ingredient)
}

func EditIngredient(ctx *gin.Context) {
	var ingredient models.Ingredients
	config.DB.Where("id = ?", ctx.Param("id")).First(&ingredient)
	ctx.BindJSON(&ingredient)
	config.DB.Save(&ingredient)
	ctx.JSON(http.StatusOK, &ingredient)
}

func DeleteIngredient(ctx *gin.Context) {
	var ingredient models.Ingredients
	config.DB.Where("id = ?", ctx.Param("id")).Delete(&ingredient)
	ctx.JSON(http.StatusOK, &ingredient)
}