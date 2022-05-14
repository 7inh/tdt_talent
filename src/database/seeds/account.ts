import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("account").del();

    // Inserts seed entries
    await knex("account").insert([
        { email: 'link@example.com', password: "1234567890" },
        { email: 'akarma@example.com', password: "1234567890" },
    ]);
};
