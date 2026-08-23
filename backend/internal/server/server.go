package server

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"net/url"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/ubcesports/public_website/internal/handler"
	"go.uber.org/fx"
)

var Module = fx.Module("server",
	fx.Provide(provideRouter),
	fx.Invoke(startServer),
)

type RouterParams struct {
	fx.In

	HealthHandler *handler.HealthHandler
}

func provideRouter(params RouterParams) *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Get("/health", params.HealthHandler.IsDatabaseHealthy)

	return r
}

func startServer(lc fx.Lifecycle, r *chi.Mux) error {
	baseURL := os.Getenv("BASE_URL")
	if baseURL == "" {
		return errors.New("BASE_URL environment variable is required")
	}

	parsed, err := url.Parse(baseURL)
	if err != nil {
		return fmt.Errorf("error parsing BASE_URL: %w", err)
	}

	srv := &http.Server{Addr: parsed.Host, Handler: r}
	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			slog.InfoContext(ctx, "server running", "base_url", baseURL)
			go func() {
				if err := srv.ListenAndServe(); err != http.ErrServerClosed {
					slog.Error("server stopped unexpectedly", "error", err)
					os.Exit(1)
				}
			}()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			slog.InfoContext(ctx, "stopping server...")
			if err := srv.Shutdown(ctx); err != nil {
				return fmt.Errorf("error shutting down server: %w", err)
			}
			return nil
		},
	})
	return nil
}
