import { NextType, RequestType, ResponseType } from "src/utils/types";
import Helper from "./Helper";

class Middleware {
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
            next(new Error("Bad request"));
        }
    }
}

export default new Middleware();
