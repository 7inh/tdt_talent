import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";
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

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status)
                .json({ ...userRequest, ...accountDatabase });
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    updateAccount: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            userRequest.role = req.body.role;

            if (!userRequest) throw new Error();

            const accountDatabase = await AccountService.mutation.updateAccount(userRequest);

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status)
                .json({ ...userRequest, ...accountDatabase });
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default AccountController;
