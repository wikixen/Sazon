package main

import "net/http"

type api struct {
	config config
}

type config struct {
	addr string
}

func (a *api) init() error {
	mux := http.NewServeMux()

	srv := &http.Server{
		Addr:    a.config.addr,
		Handler: mux,
	}
	return srv.ListenAndServe()
}
