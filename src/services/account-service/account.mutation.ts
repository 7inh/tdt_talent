import { Knex } from "knex";
import database from "src/database/database";
import { Account } from "src/utils/types/tables.interface";

export async function createAccount(
    trx: Knex.Transaction<any, any[]>,
    account: Pick<Account, "email" | "role">
) {
    return await database("account").transacting(trx).insert(account).returning(["email", "role"]);
}
