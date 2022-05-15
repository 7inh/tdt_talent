import { ERROR_MESSAGE } from "./definitions";
import express from "express";
import Helper from "./helper";

const MiddleWare = {
    async auth(req: express.Request, _res: express.Response, next: express.NextFunction) {
        try {
            const token = req.headers.authorization?.split(" ")[1];

            if (token) {
                const decodeValue = await Helper.decodeToken(token);

                if (decodeValue) {
                    req.body.user = decodeValue;
                    return next();
                }
            }

            throw Error;
        } catch (e) {
            next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default MiddleWare;
