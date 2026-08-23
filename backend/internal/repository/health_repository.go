package repository

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

type HealthRepository struct {
	pool *pgxpool.Pool
}

func NewHealthRepository(pool *pgxpool.Pool) *HealthRepository {
	return &HealthRepository{
		pool: pool,
	}
}

func (r *HealthRepository) IsDatabaseHealthy(context context.Context) (bool, error) {
	if err := r.pool.Ping(context); err != nil {
		return false, err
	}

	return true, nil
}
