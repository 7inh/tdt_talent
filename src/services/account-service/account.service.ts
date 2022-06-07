import database from "src/database/database";
import ProfileService from "../profile-service/profile.service";
import { createAccount, updateAccount } from "./account.mutation";
import { getAccountByEmail, getAllCompany } from "./account.query";

const AccountService = {
    query: {
        getAccountByEmail: getAccountByEmail,
        getAllCompany: getAllCompany,
    },
    mutation: {
        createAccount: async ({ email, role, full_name, avatar_url }: any) => {
            const trx = await database.transaction();
            try {
                const [newCreatedAccount] = await createAccount(trx, { email, role });

                trx.commit();

                await ProfileService.mutation.createProfile({
                    account_id: newCreatedAccount.id,
                    full_name,
                    avatar_url,
                    contact_mail: email,
                });

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
