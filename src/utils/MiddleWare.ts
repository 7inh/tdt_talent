import { RequestType, ResponseType } from "src/types";
import Helper from "./Helper";

class Middleware {
    async auth(req: RequestType, res: ResponseType, next: () => any) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodeValue = await Helper.decodeToken(token);

            if (decodeValue) {
                req.user = decodeValue;
                return next();
            }

            return res.json({ message: "Unauthorize" });
        } catch (e) {
            return res.json({ message: "Internal Error" });
        }
    }
}

export default new Middleware();
