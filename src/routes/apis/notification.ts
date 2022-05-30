import express from "express";
import MiddleWare from "src/utils/middleware";
import NotificationController from "src/controllers/notification.controller";

const notification = express.Router();

notification.get("/get", MiddleWare.auth, NotificationController.getAllNotification);

export default notification;
