import account from "./account";
import profile from "./profile";
import position from "./position";
import job from "./job";
import notification from "./notification";
import application from "./application";
import express from "express";

const api = express.Router();

api.use("/account", account);
api.use("/profile", profile);
api.use("/position", position);
api.use("/job", job);
api.use("/notification", notification);
api.use("/application", application);

export default api;
