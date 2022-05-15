import { ERROR_MESSAGE } from "src/utils/definitions";
import express from "express";

const AccountController = {
    login: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const user = req.body.user;
            return res.status(200).json(user);

        } catch (e) {
            const err = new Error(ERROR_MESSAGE.BAD_REQUEST);
            return next(err);
        }
    },
};

export default AccountController;
