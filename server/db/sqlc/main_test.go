package db

import (
	"context"
	"log"
	"os"
	"testing"

	"github.com/TheDP66/go-grpc-react/server/util"
	"github.com/jackc/pgx/v5/pgxpool"
)

var testStore Store

func TestMain(m *testing.M) {
	config, err := util.LoadConfig("../..")
	if err != nil {
		log.Fatal("cannot load config: ", err)
	}

	connPool, err := pgxpool.New(context.Background(), config.DBSource)
	if err != nil {
		log.Fatal("Cannot connect to db:", err)
	}

	testStore = NewStore(connPool)

	os.Exit(m.Run())
}

// ? database/sql package
// var testQueries *Queries
// var testDB *sql.DB
// func TestMain(m *testing.M) {
// 	config, err := util.LoadConfig("../..")
// 	if err != nil {
// 		log.Fatal("cannot load config: ", err)
// 	}
// 	testDB, err = sql.Open(config.DBDriver, config.DBSource)
// 	if err != nil {
// 		log.Fatal("Cannot connect to db:", err)
// 	}
// 	testQueries = New(testDB)
// 	os.Exit(m.Run())
// }
