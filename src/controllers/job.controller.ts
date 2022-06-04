import express from "express";
import JobService from "src/services/job-service/job.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const JobController = {
    getAllJob: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const jobsDatabase = await JobService.query.getAllJob();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(jobsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    upsertJob: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const jobRequest = req.body.job;
            const action = jobRequest.action;

            const requestUpdate = {
                account_id: userRequest.id,
                ...jobRequest
            }

            const jobDatabase =
                action === "update"
                    ? await JobService.mutation.updateJob(requestUpdate)
                    : await JobService.mutation.createJob(requestUpdate);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status).json(jobDatabase);
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default JobController;
