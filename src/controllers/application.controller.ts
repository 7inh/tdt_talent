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
    applyJob: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const payload = req.body.application;

            const applicationRequest = {
                ...payload,
                candidate_id: userRequest.id,
            };

            const applicationResponse = await ApplicationService.mutation.applyJob(
                applicationRequest
            );

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status)
                .json(applicationResponse);
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ApplicationController;
