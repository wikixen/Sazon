package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/wikixen/sazonapp/routes"
	"github.com/wikixen/sazonapp/helper"
)

// envSetup loads the godotenv package and returns the necessary var(PORT in this case)
func envSetup() string {
	err := godotenv.Load(".env")
	helper.ErrorHandler(err, "Error loading enviroment variables", &gin.Context{})
	
	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = ":5000"
	}

	return PORT
}

func main() {
	PORT := envSetup()

	app := gin.Default()
	app.SetTrustedProxies(nil)
	app.Use(Cors())

	// All routes for users
	app.POST("api/user", routes.CreateUser)
	app.DELETE("api/user/:id", routes.DeleteUser)

	// All routes for recipes
	app.GET("/api/recipes", routes.ShowRecipes)
	app.POST("/api/recipes", routes.CreateRecipe)
	app.PATCH("/api/recipes/:id", routes.EditRecipe)
	app.DELETE("/api/recipes/:id", routes.DeleteRecipe)

	log.Fatal(app.Run(PORT))
}
