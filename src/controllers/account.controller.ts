import AccountService from "src/services/account/account.service";
import { NextType, RequestType, ResponseType } from "src/utils/types";
import Helper from "src/utils/Helper";
import { ERROR_MESSAGE } from "src/utils/definitions";

const AccountController = {
    login: async (req: RequestType, res: ResponseType, next: NextType) => {
        try {
            if (Helper.checkValidEmail(req.user.email)) {
                const account = await AccountService.getAccountByEmail(req.user.email);

                if (!account) {
                    // TODO: create a new account
                }

                return res.status(200).json(req.user);
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
