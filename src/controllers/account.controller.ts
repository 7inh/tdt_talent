import { NextType, RequestType, ResponseType } from "src/utils/types";

class AccountController {
    async login(req: RequestType, res: ResponseType, next: NextType) {
        try {
            return res.status(200).json(req.user);
        } catch (e) {
            const err = new Error("Unauthorized");
            return next(err);
        }
    }
}

export default new AccountController();
