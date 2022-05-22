import { table } from "console";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("account", (table) => {
            table.increments("id").primary().notNullable();
            table.string("email").notNullable();
            table.string("password");
            table.string("role");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("profile", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("account_id").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');

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
            table.integer("account_id").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');
            table.integer("topic_id").references("topic.id").onDelete('SET NULL').onUpdate('CASCADE');

            table.string("title");
            table.text("description");
            table.string("attach_jd");
            table.integer("salary");
            table.string("location");
            table.string("employment_type"); // fulltime, part-time, remote, internship
            table.integer("experiment_requirement");

            table.datetime("expire_date");
            table.integer("applicant_limit");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("notification", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("from").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');
            table.integer("to").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');

            table.text("message");
            table.string("action");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("thread")
        .dropTable("topic")
        .dropTable("profile")
        .dropTable("account");
}
