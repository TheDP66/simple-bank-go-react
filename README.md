## Initialize

Run this command sequentially from root of this project

```bash
make postgres
make createdb
```

## vsCode Setup

1. Open `settings.json`
2. Paste

```bash
"go.testFlags": [
  "-v",
  "-count=1",
],
"protoc": {
    "options": [
        "--proto_path=protos",
    ]
},
```

## Getting started

Follow this step to run this program

1. Run Docker Desktop
2. Run PostgresQL on docker. Run this command if you have any problem

```bash
sudo fuser -k 5432/tcp
```

3. Run dbeaver-ce
4. Start a connection to postgres - localhost:5432
5. Open Databases
6. Find simple_bank

## Design and generate database

Follow this step to design and generate database

1. Find file on /DB/Simple bank - dbdiagram.io, copy content
2. Open https://dbdiagram.io/ and paste content to left panel
3. After done, find Export button on upper bar then press Export to PostgreSQL

## Update database

1. Modify table structure in `doc/db.dbml`
2. Run `make db_schema`
3. Generated file can be seen in `doc/schema.sql`
4. Create a new db migration script by running `make new_migration name=add_verify_emails`
   - Don't FORGET to change the name parameter
5. Setup new sql query (see `Create a new query flow` section)

## Golang-migrate

Create a migration

```bash
migrate create -ext sql -dir db/migration -seq init_schema
```

Run migration

```bash
migrate -path db/migration -database "postgresql://root:admin@localhost:5432/simple_bank?sslmode=disable" -verbose up
```

Note:

- if you get this error while migrating

```bash
error: Dirty database version 2. Fix and force version.
```

Open database (dbeaver) > field schema_migrations > uncheck the dirty field

## Generate query

Edit file on directory db/query. Follow the query formatting before creating a new query function. After done creating a new query you can run

```bash
sqlc generate
```

A new/updated file will be generated in folder db/sqlc

## Setup SQLC

1. Click [here](https://docs.sqlc.dev/en/latest/overview/install.html), follow to install sqlc
2. Create `sqlc.yaml` file in root folder
3. Copy this project `sqlc.yaml` content to your `sqlc.yaml` project
4. Run this command to create migration

```bash
migrate create -ext sql -dir db/migration -seq init_schema
```

5. Create new query file in db/query
6. Run `sqlc generate` or `make sqlc`

## Generate Mock

To generate a mock implementation run this command

```bash
mockgen -package mockdb -destination db/mock/store.go github.com/TheDP66/go-grpc-react/db/sqlc Store
```

If you got error run this command

```bash
go get github.com/golang/mock/
```

## Add a new feature

1. Create a new branch

```bash
git checkout -b ft/dbdocs
```

2. Add and commit all changes
3. Push to new branch

```bash
git push origin ft/dbdocs
```

4. Go to github merge request > Create pull request > Choose Squash and merge > Confirm squash merge > Delete branch

## Create a new query flow

1. Create a new query in db/query/user.sql
2. Run "make sqlc"
3. Buat test db/sqlc/user_test.go
4. Run "make mock"
   - Update Querier interface

## Generate DB Documentation

1. sudo apt install nodejs
2. npm i -g dbdocs
3. dbdocs login
4. copy sql query from dbdiagram.io
5. create doc/db.dbml then paste
6. dbdocs password --set dharma --project simple_bank
7. dbdocs build doc/db.dbml
8. visit dbdocs.io/... link
9. Convert dbml to sql

```bash
dbml2sql --postgres -o  doc/schema.sql doc/db.dbml
```

## Dockerize application

# Dockerfile

1. Create Dockerfile
2. Run Dockerfile to create images

```bash
docker build -t simplebank:latest .
```

3. Create a new network in docker

```bash
docker network create bank-network
```

4. Connect container to network (so postgres container can communicate with simplebank container)

```bash
docker network connect bank-network postgres3.17
```

5. Run created images

- For production use

```bash
docker run -t --name simplebank_prod --network bank-network -p 8080:8080 -e GIN_MODE=release -e DB_SOURCE="postgresql://root:admin@postgres3.17:5432/simple_bank?sslmode=disable" simplebank:latest
```

# docker-compose.yaml

1. Create file docker-compose.yaml
2. Run using this command

```bash
docker compose up
```

- note: docker-compose.yaml run in group not like docker file

### GRPC

## OS Setup

1. Go to [here](https://grpc.io/docs/protoc-installation/) and follow the instruction to instal protoc
2. Click [here](https://grpc.io/docs/languages/go/quickstart/) and setup for Prerequisites
   - if found an error try to remove all package in step 1 & 2 then install using snap for higher version
   ```bash
   sudo snap install protobuf --classic
   ```
   - Add this line in Makefile > proto after `proto/*.proto`
   ```bash
   --experimental_allow_proto3_optional
   ```
3. Install vscode-proto3 extension in vscode
4. In vscode > settings.json add this line

```bash
"protoc": {
      "options": [
          "--proto_path=protos",
      ]
   }
```

5. Click [here](https://stackoverflow.com/a/57730314) do the same but change .bash_profile to .bashrc

## gRPC Test Setup

1. Download file [here](https://github.com/ktr0731/evans/releases)
2. Extract and copy content to root project
3. Run chmod +x ./evans
4. Change script from evans to ./evans
5. Run show service
   - If you cant find your service try run
     ```bash
     show package
     package pb
     service SimpleBank
     ```

## Create Proto Function

1. Make file rpc_create_user.proto
2. Create new file user.proto to define interface/class \*optional
3. Create new file rpc_create_user.proto to define request and response
4. Import file and register function in service_simple_bank.proto
5. Run make proto

## gRPC Gateway Setup

1. Click [here](https://github.com/grpc-ecosystem/grpc-gateway#compile-from-source)
2. Follow the Installation > Compile from source instruction
3. Clone this project [link](https://github.com/googleapis/googleapis)
4. Create directory inside proto/google/api
5. Copy this files from cloned repository to proto/google/api folder

```bash
google/api/annotations.proto
google/api/field_behavior.proto
google/api/http.proto
google/api/httpbody.proto
```

6. Follow [this](https://github.com/grpc-ecosystem/grpc-gateway#2-with-custom-annotations) instruction to service_simple_bank.proto
7. Add `--grpc-gateway_out=pb --grpc-gateway_opt=paths=source_relative \` to Makefile > proto

## Swagger Setup

1. Add this command to Makefile > proto

```bash
--openapiv2_out=doc/swagger --openapiv2_opt=allow_merge=true merge_file_name=simple_bank \
```

2. Clone this project `https://github.com/grpc-ecosystem/grpc-gateway.git`
3. Create new directory in proto/protoc-gen-openapiv2/options
4. Open directory in grpc-gateway/protoc-get-opnapiv2/options
5. Copy all content to proto/protoc-gen-openapiv2/options (See step 3)
6. Clone this project `https://github.com/swagger-api/swagger-ui.git`
7. Go to swagger-ui/dist copy all content to doc/swagger
8. Find swagger-initializer.js in doc/swagger
9. Update url (line: 6) value to simple_bank.swagger.json (generated from make proto)
10. Update main.go (find swagger)

## Statik Setup

1. Copy `_ "github.com/rakyll/statik"` to tools/tools.go
2. Run `go install github.com/rakyll/statik`
3. Add this command in Makefile > proto

```
statik -src=./doc/swagger -dest=./doc
```

4. Add this command in main.go > import()

```
	_ "github.com/TheDP66/go-grpc-react/server/doc/statik"
```

## Asynq Redis Setup

1. run `go get -u github.com/hibiken/asynq`
2. Copy `worker/distributor.go` and `worker/processor.go`
3. Create new worker `worker/task_send_verify_email.go`
4. Run `make redis_standalone`

## Setup Email Verification

1. Run `go get github.com/jordan-wright/email`
2. Create `mail/sender.go`

## Setup Buf

1. install buf `npm install @bufbuild/buf`
2. check version `npx buf --version`
3. create `buf.gen.yaml` and `buf.work.yaml` file in root
4. create `buf.yaml` in proto folder
