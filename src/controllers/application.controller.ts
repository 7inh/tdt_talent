import express from "express";
import ApplicationService from "src/services/application-service/application.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ApplicationController = {
    getByCompany: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            const jobsDatabase = await ApplicationService.query.getByCompany(userRequest.id);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(jobsDatabase);
        } catch (error) {
            console.error(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getByCandidate: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            const jobsDatabase = await ApplicationService.query.getByCandidate(userRequest.id);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(jobsDatabase);
        } catch (error) {
            console.error(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ApplicationController;
