import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("topic").del();

    // Inserts seed entries
    await knex("topic").insert([
        { title: "AI-Engine", description: "AI-Engine developer"},
        { title: "Backend", description: "Backend developer"},
        { title: "Frontend", description: "Frontend developer"},
        { title: "Game", description: "Game developer"},
        { title: "Mobile", description: "Mobiles developer"},
        { title: "Tester", description: "Testing developer"},
    ]);
}
