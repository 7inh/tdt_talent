import { Knex } from "knex";
import database from "src/database/database";

export async function createNotification(trx: Knex.Transaction<any, any[]>, notification: any) {
    return await database("notification").transacting(trx).insert(notification).returning("*");
}