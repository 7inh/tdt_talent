import { Knex } from "knex";
import database from "src/database/database";

export async function applyJob(trx: Knex.Transaction<any, any[]>, application: any) {
    return await database("application")
        .transacting(trx)
        .insert(application)
        .returning(["id", "candidate_id", "company_id", "job_id", "state"]);
}
export async function setApplicationState(trx: Knex.Transaction<any, any[]>, application: any) {
    return await database("application")
        .transacting(trx)
        .update({
            state: application.state,
            updated_at: new Date(),
        })
        .where({
            id: application.id,
            company_id: application.company_id,
        })
        .returning("*");
}
