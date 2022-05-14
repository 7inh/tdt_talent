# tdt_talent

### create .env file contains

```shell
PORT=6969
```

### Create knexfile
create migration

```
knex migrate:make migration_name
```

create schema

```
knex migrate:latest
knex migrate:up
```

drop schema

```
knex migrate:down
```