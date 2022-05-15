import database from "src/database/database";
import { Account } from "src/utils/types/tables.interface";
import { createAccount } from "./account.mutation";
import { getAccountByEmail } from "./account.query";

const AccountService = {
    query: {
        getAccountByEmail: getAccountByEmail,
    },
    mutation: {
        createAccount: async (account: Pick<Account, "email" | "role">) => {
            const trx = await database.transaction();
            try {
                await createAccount(trx, account);
                trx.commit();
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default AccountService;
