import express from "express";
import MiddleWare from "src/utils/middleware";
import JobController from "src/controllers/job.controller";

const job = express.Router();

job.get("/get", MiddleWare.auth, JobController.getAllJob);
job.post("/upsert", MiddleWare.auth, JobController.upsertJob);

export default job;
