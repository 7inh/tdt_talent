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

                if (userRequest && userRequest.email && Helper.checkValidEmail(userRequest.email)) {
                    const accountDatabase = await AccountService.query.getAccountByEmail(
                        userRequest.email
                    );

                    if (!accountDatabase && req.originalUrl !== "/api/account/login") {
                        return next(new Error(ERROR_MESSAGE.UNAUTHORIZED));
                    }

                    req.body.user = { ...userRequest, ...accountDatabase };

                    return next();
                } else {
                    return next(new Error(ERROR_MESSAGE.INVALID_EMAIL));
                }
            }

            throw Error;
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default MiddleWare;
