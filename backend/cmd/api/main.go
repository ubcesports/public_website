package main

import (
	"log"
	"log/slog"

	"github.com/joho/godotenv"
	"go.uber.org/fx"

	_ "time/tzdata"

	"github.com/ubcesports/public_website/internal/database"
	"github.com/ubcesports/public_website/internal/handler"
	"github.com/ubcesports/public_website/internal/repository"
	"github.com/ubcesports/public_website/internal/server"
	"github.com/ubcesports/public_website/internal/service"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	slog.Info("starting backend...")

	fx.New(
		database.Module,
		repository.Module,
		service.Module,
		handler.Module,
		server.Module,
	).Run()
}
