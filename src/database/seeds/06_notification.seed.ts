import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("notification").del();

    // Inserts seed entries
    await knex("notification").insert([
        {from: 1, to: 1, job_id: 1, action: "approve", read:false},
        {from: 2, to: 2, job_id: 2, action: "reject", read:true},
        {from: 3, to: 3, job_id: 3, action: "reject", read:false},
        {from: 4, to: 4, job_id: 3, action: "approve", read:true},
        {from: 5, to: 5, job_id: 4, action: "reject", read:false},
        {from: 6, to: 6, job_id: 5, action: "approve", read:false},
        {from: 7, to: 7, job_id: 3, action: "reject", read:true},
        {from: 8, to: 8, job_id: 3, action: "approve", read:true},
        {from: 1, to: 9, job_id: 2, action: "approve", read:false},
        {from: 2, to: 1, job_id: 1, action: "reject", read:true},
        {from: 3, to: 2, job_id: 3, action: "reject", read:false},
        {from: 4, to: 3, job_id: 2, action: "approve", read:true},
        {from: 5, to: 4, job_id: 5, action: "approve", read:false},
        {from: 6, to: 5, job_id: 1, action: "approve", read:false}])
}
