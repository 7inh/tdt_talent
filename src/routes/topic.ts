import express from "express";
import MiddleWare from "src/utils/middleware";
import TopicController from "src/controllers/topic.controller";

const topic = express.Router();

topic.get("/get", MiddleWare.auth, TopicController.getAllTopic);

export default topic;
