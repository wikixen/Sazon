package helper

import (
	"net/http"

	"github.com/gin-gonic/gin"
)


func ErrorHandler(err error, errMsg string, ctx *gin.Context) {
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"err": errMsg,
		})
	}
}