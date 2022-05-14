import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("account", (table) => {
            table.increments("id").primary().notNullable();
            table.string("email");
            table.string("password");
            table.string("role");

            table.string("full_name");
            table.string("avatar_url");
            table.string("phone_number");
            table.string("address");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('account')
}
