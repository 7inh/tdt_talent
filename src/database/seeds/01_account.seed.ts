import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("account").del();

    // Inserts seed entries
    await knex("account").insert([
        { email: process.env.TEST_USER, password: "1234567890", role: "user" },
        { email: "lamlam@example.com", password: "1234567890", role: "company" },
        { email: "miumiu@example.com", password: "1234567890", role: "candidate" },
        { email: "milu@example.com", password: "1234567890", role: "user" },
        { email: "jimin@example.com", password: "1234567890", role: "candidate" },
        { email: "nono@example.com", password: "1234567890", role: "candidate" },
        { email: "nguyenc@example.com", password: "1234567890", role: "candidate" },
        { email: "lipstick@example.com", password: "1234567890", role: "candidate" },
        { email: "sethoa@example.com", password: "1234567890", role: "company" }
    ]);
}
