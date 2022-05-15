import AccountService from "src/services/account-service/account.service";
import { NextType, RequestType, ResponseType } from "src/utils/types";
import Helper from "src/utils/Helper";
import { ERROR_MESSAGE } from "src/utils/definitions";

const AccountController = {
    login: async (req: RequestType, res: ResponseType, next: NextType) => {
        try {
            if (Helper.checkValidEmail(req.user.email)) {
                let account = await AccountService.query.getAccountByEmail(req.user.email);

                if (!account) {
                    account = await AccountService.mutation.createAccount({
                        email: req.user.email,
                        role: "user",
                    });
                }

                return res.status(200).json({ ...req.user, ...account });
            }

            const err = new Error(ERROR_MESSAGE.INVALID_EMAIL);
            return next(err);
        } catch (e) {
            const err = new Error(ERROR_MESSAGE.BAD_REQUEST);
            return next(err);
        }
    },
};

export default AccountController;
