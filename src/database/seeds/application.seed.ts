import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("application").del();

    // Inserts seed entries
    await knex("application").insert([
        { applicant: 3, company: 9, state: "Rtejec"},
        { applicant: 4, company: 9, state: "Approve"},
        { applicant: 6, company: 9, state: "Rtejec"},
        { applicant: 7, company: 2, state: "Approve"},
        { applicant: 3, company: 9, state: "Rtejec"},
        { applicant: 4, company: 2, state: "Rtejec"},
        { applicant: 3, company: 2, state: "Rtejec"},
        { applicant: 2, company: 9, state: "Approve"},
        { applicant: 5, company: 9, state: "Approve"},
        { applicant: 6, company: 2, state: "ARtejec"},
        { applicant: 7, company: 2, state: "Rtejec"},
        { applicant: 3, company: 9, state: "Approve"},
    ]);
}
