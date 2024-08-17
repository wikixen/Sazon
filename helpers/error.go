package helpers

import (
	"github.com/gin-gonic/gin"
)

// ErrorStruct Status should be an int or http.status
type ErrorStruct struct {
	Status int
	Err    error
	Ctx    *gin.Context
}

// ErrorHandler checks if err != nil and return a JSON with the actual error & error string
func (returnJson ErrorStruct) ErrorHandler() {
	if returnJson.Err != nil {
		returnJson.Ctx.JSON(returnJson.Status, gin.H{
			"err": returnJson.Err,
			"msg": returnJson.Err.Error(),
		})
	}
}
