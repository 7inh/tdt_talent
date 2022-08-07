import express from "express";
import MiddleWare from "src/utils/middleware";
import JobController from "src/controllers/job.controller";

const job = express.Router();

job.get("/get_total", JobController.getJobTotal);
job.get("/get", JobController.getAllJob);
job.get("/get/:page", JobController.getPerPage);
job.get("/get_by_company", MiddleWare.auth, JobController.getByCompany);
job.get("/get_detail/:id", MiddleWare.auth, JobController.getDetail);

job.post("/upsert", MiddleWare.auth, JobController.upsertJob);
job.post("/set_state", MiddleWare.auth, JobController.setJobState);

export default job;
