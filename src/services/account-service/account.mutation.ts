import database from "src/database/database";
import { Account } from "src/utils/types/tables.interface";

export async function createAccount(account: Pick<Account, 'email' | 'role'>) {
    return await database("account").insert(account).returning(["email", "role"]);
}
