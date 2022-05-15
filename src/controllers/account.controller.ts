import AccountService from "src/services/account-service/account.service";
import Helper from "src/utils/helper";
import { ERROR_MESSAGE } from "src/utils/definitions";
import express from "express";

const AccountController = {
    login: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;

            if (userRequest && Helper.checkValidEmail(userRequest.email)) {
                let account = await AccountService.query.getAccountByEmail(userRequest.email);

                if (!account) {
                    account = await AccountService.mutation.createAccount({
                        email: userRequest.email,
                        role: "user",
                    });
                }

                return res.status(200).json({ ...userRequest, ...account });
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
