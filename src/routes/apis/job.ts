import express from "express";
import MiddleWare from "src/utils/middleware";
import JobController from "src/controllers/job.controller";

const job = express.Router();

job.get("/get", MiddleWare.auth, JobController.getAllJob);
job.get("/get_detail/:id", MiddleWare.auth, JobController.getDetail);
job.post("/upsert", MiddleWare.auth, JobController.upsertJob);

export default job;
