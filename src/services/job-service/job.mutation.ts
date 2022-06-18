import { Knex } from "knex";
import database from "src/database/database";

export async function createJob(trx: Knex.Transaction<any, any[]>, job: any) {
    return await database("job").transacting(trx).insert(job).returning("*");
}

export async function setJobState(trx: Knex.Transaction<any, any[]>, job: any) {
    return await database("job")
        .transacting(trx)
        .update({
            state: job.state,
            updated_at: new Date(),
        })
        .where({
            id: job.id,
        })
        .returning("*");
}

// export async function updateJob(
//     trx: Knex.Transaction<any, any[]>,
//     job: Omit<Job, "created_at" | "updated_at" | "deleted_at">,
//     job_id: number
// ) {
//     return await database("job")
//         .transacting(trx)
//         .update({ ...job, updated_at: new Date() })
//         .where({
//             id: job_id,
//         })
//         .returning("*");
// }
