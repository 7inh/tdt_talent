import { Knex } from 'knex';
import dotenv from "dotenv";

dotenv.config({path: '../../.env'});

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const knexConfig : IKnexConfig  = {
    development: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_DEV_NAME,
            user: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASSWORD,
            host: process.env.DB_DEV_HOST,
        },
        pool: {
            min: 3,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
          directory: './seeds',
          extension: 'ts'
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: process.env.DB_PROD_NAME,
            user: process.env.DB_PROD_USER,
            password: process.env.DB_PROD_PASSWORD,
            host: process.env.DB_PROD_HOST,
        },
        pool: {
            min: 2,
            max: 20
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
};

export default knexConfig