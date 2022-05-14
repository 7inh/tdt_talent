import { HTTP_STATUS } from "./definitions";
import express from "express";

class Handler {
    errorHandler(err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) {
        const message = err.message;
        const responseStatus = HTTP_STATUS[message];

        return res.status(responseStatus).json({
            message: message,
            path: req.originalUrl,
        });
    }
}

export default new Handler();
