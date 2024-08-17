package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/wikixen/sazonapp/config"
	"github.com/wikixen/sazonapp/middleware"
)

func main() {
	middleware.EnvSetup()
	SERVER_PORT := os.Getenv("SERVER_PORT")
	if SERVER_PORT == "" {
		SERVER_PORT = ":5000"
	}

	app := gin.Default()
	config.DBConnect()
	app.SetTrustedProxies(nil)
	app.Use(middleware.Cors())

	log.Fatal(app.Run(SERVER_PORT))
}
