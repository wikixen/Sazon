// env should hold any functions that convert environment variables to program variables
package env

import (
	"os"
	"strconv"
)

// GetStr retrieves string env vars from env file
func GetStr(key, fallback string) string {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fallback
	}
	return val
}

// GetInt retrieves int env vars from env file
func GetInt(key string, fallback int) int {
	val, ok := os.LookupEnv(key)
	if !ok {
		return fallback
	}
	
	valAsInt, err := strconv.Atoi(val)
	if err != nil {
		return fallback
	}
	return valAsInt
}