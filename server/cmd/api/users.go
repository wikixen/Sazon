package main

import "net/http"

type userKey string

const userCtx userKey = "user"

func (app *app) getUserHandler(w http.ResponseWriter, r *http.Request) {

}