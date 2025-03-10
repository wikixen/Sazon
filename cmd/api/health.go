package main

import "net/http"

// healthCheckHandler is test function to see that routing works
func (app *app) healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("ok"))
}