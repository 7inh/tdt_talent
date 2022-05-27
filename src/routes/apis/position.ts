import express from "express";
import MiddleWare from "src/utils/middleware";
import PositionController from "src/controllers/position.controller";

const position = express.Router();

position.get("/get", MiddleWare.auth, PositionController.getAllPosition);

export default position;
