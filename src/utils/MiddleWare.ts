import { NextType, RequestType, ResponseType } from "src/utils/types";
import { ERROR_MESSAGE } from "./definitions";
import Helper from "./Helper";

const Middleware = {
    async auth(req: RequestType, _res: ResponseType, next: NextType) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodeValue = await Helper.decodeToken(token);

            if (decodeValue) {
                req.user = decodeValue;
                return next();
            }

            throw Error;
        } catch (e) {
            next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default Middleware;
