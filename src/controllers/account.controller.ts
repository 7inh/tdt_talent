import { ERROR_MESSAGE } from "src/utils/definitions";
import express from "express";
import AccountService from "src/services/account-service/account.service";

const AccountController = {
    login: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const accountDatabase =
                (await AccountService.query.getAccountByEmail(userRequest.email)) ||
                (await AccountService.mutation.createAccount({
                    email: userRequest.email,
                    role: "user",
                }));

            if (!accountDatabase) throw new Error();

            return res.status(200).json({ ...userRequest, ...accountDatabase });
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default AccountController;
