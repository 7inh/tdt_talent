import { createAccount } from "./account.mutation";
import { getAccountByEmail } from "./account.query";

const AccountService = {
    query: {
        getAccountByEmail: getAccountByEmail,
    },
    mutation: {
        createAccount: createAccount,
    },
};

export default AccountService;
