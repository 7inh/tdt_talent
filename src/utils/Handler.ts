import { HTTP_STATUS } from "./definitions";

class Handler {
    errorHandler(err: Error, req: any, res: any, _next: any) {
        const message = err.message;
        const responseStatus = HTTP_STATUS[message];

        return res.status(responseStatus).json({
            message: message,
            path: req.originalUrl,
        });
    }
}

export default new Handler();
