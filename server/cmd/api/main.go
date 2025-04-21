package main

import (
	"log"

	"github.com/wikixen/sazonapp/internal/data"
	"github.com/wikixen/sazonapp/internal/db"
	"github.com/wikixen/sazonapp/internal/env"
)

func main() {
	cfg := config{
		addr: env.GetStr("ADDR", ":8080"),
		db: dbConfig{
			addr:         env.GetStr("DB_ADDR", "postgres://postgres:admin@localhost/SazonApp?sslmode=disable"),
			maxOpenConns: env.GetInt("DB_MAX_OPEN_CONNS", 30),
			maxIdleConns: env.GetInt("DB_MAX_IDLECONNS", 30),
			maxIdleTime:  env.GetStr("DB_MAX_IDLE_TIME", "15m"),
		},
	}

	db, err := db.New(
		cfg.db.addr,
		cfg.db.maxOpenConns,
		cfg.db.maxIdleConns,
		cfg.db.maxIdleTime,
	)
	if err != nil {
		log.Panic(err)
	}
	defer db.Close()
	log.Println("DB connection established")

	store := data.NewStorage(db)

	app := &app{
		config: cfg,
		store:  store,
	}

	mux := app.mount()
	log.Fatal(app.run(mux))
}
