package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
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

	log.Fatal(app.Run(PORT))
}
