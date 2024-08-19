package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/middleware"
	"github.com/wikixen/sazonapp/routes"
)

func main() {
	config.EnvSetup(&gin.Context{})
	SERVER_PORT := os.Getenv("SERVER_PORT")
	if SERVER_PORT == "" {
		SERVER_PORT = ":5000"
	}

	app := gin.Default()
	config.DBConnect(&gin.Context{})
	app.SetTrustedProxies(nil)
	app.Use(middleware.Cors())
	routes.UserRoutes(app)

	log.Fatal(app.Run(SERVER_PORT))
}
