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
                    role: userRequest.role || "user",
                    full_name: userRequest.name,
                    avatar_url: userRequest.picture,
                }));

            if (!accountDatabase) throw new Error();

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status)
                .json({ ...userRequest, ...accountDatabase });
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getDetail: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { id: accountId } = req.params || req.query;
            const [accountsDatabase] = await AccountService.query.getDetail(parseInt(accountId));

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(accountsDatabase);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const allCompany = await AccountService.query.getAll();
            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(allCompany);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getAllCompany: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const allCompany = await AccountService.query.getAllCompany();
            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(allCompany);
        } catch (error) {
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
            const { role } = req.params || req.query;

            if (!userRequest || !role || !["candidate", "company"].includes(role))
                throw new Error();

            const accountDatabase = await AccountService.mutation.updateAccount({
                id: userRequest.id,
                role: role,
            });

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status)
                .json({ ...userRequest, ...accountDatabase });
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default AccountController;
