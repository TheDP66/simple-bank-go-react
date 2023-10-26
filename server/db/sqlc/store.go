package db

import (
	"context"

	"github.com/jackc/pgx/v5/pgxpool"
)

// Store provides all functions that can be rollback
type Store interface {
	Querier
	TransferTx(ctx context.Context, arg TransferTxParams) (TransferTxResult, error)
	CreateUserTx(ctx context.Context, arg CreateUserTxParams) (CreateUserTxResult, error)
	VerifyEmailTx(ctx context.Context, arg VerifyEmailTxParams) (VerifyEmailTxResult, error)
}

// SQLStore provides all functions to execute SQL queries and transactions
// pgx/v5
type SQLStore struct {
	*Queries
	connPool *pgxpool.Pool
}

// ? database/sql package
// type SQLStore struct {
// 	*Queries
// 	db *sql.DB
// }

// NewStore creates a new Store
// pgx/v5
func NewStore(connPool *pgxpool.Pool) Store {
	return &SQLStore{
		connPool: connPool,
		Queries:  New(connPool),
	}
}

// ? database/sql package
// func NewStore(db *sql.DB) Store {
// 	return &SQLStore{
// 		db:      db,
// 		Queries: New(db),
// 	}
// }
