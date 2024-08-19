package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/controllers"
	"github.com/wikixen/sazonapp/middleware"
)

func UserRoutes(app *gin.Engine) {
	app.GET("/api/user", controllers.GetAllUsers)
	app.GET("/api/user/:id", controllers.GetUser)
	
	app.POST("/api/user", controllers.CreateUser)
	app.POST("/api/login", controllers.VerifyLogin)
	app.GET("/api/validate", middleware.RequireAuth, controllers.Validate)

	app.PATCH("/api/user/:id", middleware.RequireAuth, controllers.EditUser)
	app.DELETE("/api/user/:id", middleware.RequireAuth, controllers.DeleteUser)
	
}

func RecipeRoutes(app *gin.Engine) {
	app.GET("/api/recipe", middleware.RequireAuth, controllers.GetAllRecipes)
	app.GET("/api/recipe/:id", middleware.RequireAuth, controllers.GetRecipe)
	app.POST("/api/recipe", middleware.RequireAuth, controllers.CreateRecipe)
	app.PATCH("/api/recipe/:id", middleware.RequireAuth, controllers.EditRecipe)
	app.DELETE("/api/recipe/:id", middleware.RequireAuth, controllers.DeleteRecipe)
}

func IngredientRoutes(app *gin.Engine) {
	app.GET("/api/ingredient", middleware.RequireAuth, controllers.GetAllIngredients)
	app.GET("/api/ingredient/:id", middleware.RequireAuth, controllers.GetIngredient)
	app.POST("/api/ingredient", middleware.RequireAuth, controllers.CreateIngredient)
	app.PATCH("/api/ingredient/:id", middleware.RequireAuth, controllers.EditIngredient)
	app.DELETE("/api/ingredient/:id", middleware.RequireAuth, controllers.DeleteIngredient)
}
