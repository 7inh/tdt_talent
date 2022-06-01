import { Knex } from "knex";
import database from "src/database/database";
import { Account } from "src/utils/types/tables.interface";

export async function createAccount(
    trx: Knex.Transaction<any, any[]>,
    account: Pick<Account, "email" | "role">
) {
    return await database("account")
        .transacting(trx)
        .insert(account)
        .returning(["id", "email", "role"]);
}

export async function updateAccount(
    trx: Knex.Transaction<any, any[]>,
    account: Pick<Account, "role">,
    account_id: number
) {
    return await database("account")
        .transacting(trx)
        .update({ ...account, updated_at: new Date() })
        .where({
            id: account_id,
        })
        .returning("*");
}
