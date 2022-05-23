import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("account", (table) => {
            table.increments("id").primary().notNullable();
            table.string("email").notNullable();
            table.string("password");
            table.string("role"); // user, applicant, company, admin

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
        .createTable("job", (table) => {
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
            table.integer("candidate_limit");

            table.string("state"); // active, pending, rejected, expired

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("application", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("applicant").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');
            table.integer("company").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');

            table.string("state"); // approved, rejected, pending

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("notification", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("from").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');
            table.integer("to").references("account.id").onDelete('CASCADE').onUpdate('CASCADE');
            table.integer("topic_id").references("topic.id").onDelete('SET NULL').onUpdate('CASCADE');

            table.string("action"); // approved, rejected, applied
            table.boolean("read").defaultTo(false);
 
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("notification")
        .dropTable("application")
        .dropTable("job")
        .dropTable("topic")
        .dropTable("profile")
        .dropTable("account");
}
