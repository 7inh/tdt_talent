import express from "express";
import ApplicationController from "src/controllers/application.controller";
import MiddleWare from "src/utils/middleware";

const application = express.Router();

application.get("/get_by_company", MiddleWare.auth, ApplicationController.getByCompany);
application.get("/get_by_candidate", MiddleWare.auth, ApplicationController.getByCandidate);

application.post("/apply_job", MiddleWare.auth, ApplicationController.applyJob);

export default application;
