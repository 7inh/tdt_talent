import { ERROR_MESSAGE } from "./definitions";
import express from "express";
import Helper from "./helper";
import AccountService from "src/services/account-service/account.service";

const MiddleWare = {
    async auth(req: express.Request, _res: express.Response, next: express.NextFunction) {
        try {
            const token = req.headers.authorization?.split(" ")[1];

            if (token) {
                const userRequest = await Helper.decodeToken(token);

                if (userRequest.email && Helper.checkValidEmail(userRequest.email)) {
                    let account = await AccountService.query.getAccountByEmail(userRequest.email);
                    req.body.user = { ...userRequest, ...account };

                    return next();
                } else {
                    const err = new Error(ERROR_MESSAGE.INVALID_EMAIL);
                    return next(err);
                }
            }

            throw Error;
        } catch (e) {
            next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default MiddleWare;
