import { RequestType, ResponseType } from "src/types";

class AccountController {
    async login(req: RequestType, res: ResponseType) {
        try {
            res.status(200).json(req.user);
        } catch (error) {
            res.status(405).json("Unknown");
        }
    }
}

export default new AccountController();
