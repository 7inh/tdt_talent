import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("application").del();

    // Inserts seed entries
    await knex("application").insert([
        { job_id: 2, candidate_id: 3, company_id: 9, state: "reject" },
        { job_id: 2, candidate_id: 4, company_id: 9, state: "approve" },
        { job_id: 2, candidate_id: 6, company_id: 9, state: "reject" },
        { job_id: 2, candidate_id: 7, company_id: 2, state: "approve" },
        { job_id: 2, candidate_id: 3, company_id: 9, state: "reject" },
        { job_id: 2, candidate_id: 4, company_id: 2, state: "reject" },
    ]);
}
