import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("application").del();

    // Inserts seed entries
    await knex("application").insert([
        { applicant: 3, company: 9, state: "reject"},
        { applicant: 4, company: 9, state: "approve"},
        { applicant: 6, company: 9, state: "reject"},
        { applicant: 7, company: 2, state: "approve"},
        { applicant: 3, company: 9, state: "reject"},
        { applicant: 4, company: 2, state: "reject"},
        { applicant: 3, company: 2, state: "reject"},
        { applicant: 2, company: 9, state: "approve"},
        { applicant: 5, company: 9, state: "approve"},
        { applicant: 6, company: 2, state: "reject"},
        { applicant: 7, company: 2, state: "reject"},
        { applicant: 3, company: 9, state: "approve"},
    ]);
}
