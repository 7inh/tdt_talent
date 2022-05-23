import database from "src/database/database";
import { Account } from "src/utils/types/tables.interface";
import { createAccount, updateAccount } from "./account.mutation";
import { getAccountByEmail } from "./account.query";

const AccountService = {
    query: {
        getAccountByEmail: getAccountByEmail,
    },
    mutation: {
        createAccount: async (account: Pick<Account, "email" | "role">) => {
            const trx = await database.transaction();
            try {
                const newCreatedAccount = await createAccount(trx, account);
                trx.commit();

                return newCreatedAccount;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
        updateAccount: async (account: Pick<any, "id" | "role">) => {
            const trx = await database.transaction();
            try {
                const account_id = account.id;
                const [accountUpdated] = await updateAccount(trx, account, account_id);
                trx.commit();

                return accountUpdated;
            } catch (error) {
                console.log(error);
                trx.rollback();
                throw error;
            }
        },
    },
};

export default AccountService;
