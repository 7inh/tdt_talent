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
    getByCompany: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            const jobsDatabase = await JobService.query.getByCompany(userRequest.id);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(jobsDatabase);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getDetail: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { id: jobId } = req.params || req.query;
            const [jobsDatabase] = await JobService.query.getDetail(parseInt(jobId));

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(jobsDatabase);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    upsertJob: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const jobPayload = req.body.job;
            const action = jobPayload.action || "create";

            const jobRequest = {
                ...jobPayload,
                account_id: userRequest.id,
            };

            const jobDatabase =
                action === "update"
                    ? await JobService.mutation.updateJob(jobRequest)
                    : await JobService.mutation.createJob(jobRequest);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status).json(jobDatabase);
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    setJobState: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const jobPayload = req.body.job;

            const jobRequest = {
                ...jobPayload,
                account_id: userRequest.id,
            };

            const jobUpdated = await JobService.mutation.setJobState(jobRequest)

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status).json(jobUpdated);
        } catch (error) {
            console.error(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default JobController;
