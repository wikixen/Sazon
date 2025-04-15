package main

import (
	"log"
	"net/http"
	"time"

	"github.com/wikixen/sazonapp/internal/data"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type app struct {
	config config
	store  data.Storage
}

type config struct {
	addr string
	db   dbConfig
}

// dbConfig holds settings for the DB
type dbConfig struct {
	addr         string
	maxOpenConns int
	maxIdleConns int
	maxIdleTime  string
}

// mount creates a Chi router.
// The middleware provided are those recommended by Chi on their GitHub
func (app *app) mount() http.Handler {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Use(middleware.Timeout(60 * time.Second))

	// Routes go Here
	r.Route("/v1", func(r chi.Router) {
		r.Get("/health", app.healthCheckHandler)
		// // users
		// r.Route("users", func(r chi.Router) {
		// 	r.Put("activate/{token}",)

		// 	r.Route("/{userID}", func(r chi.Router) {
		// 		r.Use() // Auth Here

		// 		r.Get("/",)
		// 	})

		// 	r.Group(func(r chi.Router) {
		// 		r.Use()
		// 		r.Get()
		// 	})
		// })
		// // recipes
		// r.Route()
		// ingredients
	})

	return r
}

// run starts the server
func (app *app) run(mux http.Handler) error {
	srv := &http.Server{
		Addr:         app.config.addr,
		Handler:      mux,
		WriteTimeout: time.Second * 30,
		ReadTimeout:  time.Second * 10,
		IdleTimeout:  time.Minute,
	}

	log.Printf("Server has started at %s", app.config.addr)

	return srv.ListenAndServe()
}
