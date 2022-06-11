import express from "express";
import ApplicationController from "src/controllers/application.controller";
import MiddleWare from "src/utils/middleware";

const application = express.Router();

application.get("/get_by_company", MiddleWare.auth, ApplicationController.getByCompany);

export default application;
