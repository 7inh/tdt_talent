# tdt_talent

### Environment
Create a `.env` file containing

```
PORT=6969
```

### Database
Create migration

```
knex migrate:make migration_name
```

Create schema

```
knex migrate:latest
knex migrate:up
```

Drop schema

```
knex migrate:down
```

Create data value
```
knex seed:run
```