import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("account", (table) => {
            table.increments("id").primary().notNullable();
            table.string("email");
            table.string("password");
            table.string("role");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("profile", (table) => {
            table.increments("id").primary().notNullable();
            table.integer('account_id').references('account.id');

            table.string("full_name");
            table.string("avatar_url");
            table.string("phone_number");
            table.string("address");
            table.text("description");
            table.string("attach_resume");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("topic", (table) => {
            table.increments("id").primary().notNullable();

            table.string("title");
            table.text("description");
        })
        .createTable("thread", (table) => {
            table.increments("id").primary().notNullable();
            table.integer('account_id').references('account.id');
            table.integer('topic_id').references('topic.id');

            table.string("title");
            table.text("description");
            table.string("attach_jd");
            table.integer("salary");
            table.integer("experiment_requirement");

            table.datetime("expire_date");
            table.integer("applicant_limit");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        }); 

}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('thread').dropTable('topic').dropTable('profile').dropTable('account')
}
