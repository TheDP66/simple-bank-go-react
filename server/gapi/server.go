package gapi

import (
	"fmt"

	db "github.com/TheDP66/go-grpc-react/server/db/sqlc"
	"github.com/TheDP66/go-grpc-react/server/pb"
	"github.com/TheDP66/go-grpc-react/server/token"
	"github.com/TheDP66/go-grpc-react/server/util"
	"github.com/TheDP66/go-grpc-react/server/worker"
)

// Server serves gRPC requests for our banking service
type Server struct {
	pb.UnimplementedSimpleBankServer
	config          util.Config
	store           db.Store
	tokenMaker      token.Maker
	taskDistributor worker.TaskDistributor
}

// NewServer creates a new gRPC server
func NewServer(config util.Config, store db.Store, taskDistributor worker.TaskDistributor) (*Server, error) {
	// ? Create Token using JWT
	// tokenMaker, err := token.NewJWTMaker(config.TokenSymmetricKey)

	// ? Create Token using Paseto (recommend)
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		config:          config,
		store:           store,
		tokenMaker:      tokenMaker,
		taskDistributor: taskDistributor,
	}

	return server, nil
}
