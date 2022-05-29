import account from "./account";
import profile from "./profile";
import position from "./position";
import job from "./job";
import express from "express";

const api = express.Router();

api.use("/account", account);
api.use("/profile", profile);
api.use("/position", position);
api.use("/job", job);

export default api;
