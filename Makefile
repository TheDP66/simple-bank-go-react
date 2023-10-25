DB_URL=postgresql://root:admin@localhost:5432/simple_bank?sslmode=disable

install:
	cd ./server && go mod tidy && cd ../client && npm i

network:
	docker network create bank-network

postgres:
	docker run --name postgres3.17 --network bank-network -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=admin -d postgres:alpine3.17

postgres_standalone:
	docker run --name postgres3.17local -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=admin -d postgres:alpine3.17

createdb:
	docker exec -it postgres15.2 createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres15.2 dropdb simple_bank

migrateup:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose up

migrateup1:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose up 1

migratedown:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose down

migratedown1:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose down 1

new_migration:
	migrate create -ext server/sql -dir server/db/migration -seq $(name)

db_docs:
	dbdocs build server/doc/db.dbml

db_schema:
	dbml2sql --postgres -o server/doc/schema.sql server/doc/db.dbml

sqlc:
	sqlc generate

test:
	go test -v -cover -short ./server/...

client:
	cd ./client && npm run build

server:
	go run main.go

mock:
	mockgen -package mockdb -destination server/db/mock/store.go github.com/TheDP66/go-grpc-react/server/db/sqlc Store
	mockgen -package mockwk -destination server/worker/mock/store.go github.com/TheDP66/go-grpc-react/server/worker TaskDistributor

proto:
	rm -f server/pb/*.go 
	rm -f server/doc/swagger/*.swagger.json
	protoc --proto_path=proto --go_out=server/pb --go_opt=paths=source_relative --go-grpc_out=server/pb --go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=server/pb --grpc-gateway_opt=paths=source_relative \
	--openapiv2_out=server/doc/swagger --openapiv2_opt=allow_merge=true,merge_file_name=simple_bank \
	proto/*.proto --experimental_allow_proto3_optional
	statik -src=./server/doc/swagger -dest=./server/doc

buf:
	npx buf generate	

evans:
	chmod +x ./evans
	./evans --host localhost --port 9090 --package pb --service SimpleBank -r repl

redis_standalone:
	docker run --name redis3.17local -p 6379:6379 -d redis:alpine3.17

.PHONY: install network postgres postgres_standalone createdb dropdb migrateup migrateup1 migratedown migratedown1 new_migration sqlc test client server mock proto buf evans redis_standalone