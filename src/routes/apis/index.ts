import account from "./account";
import profile from "./profile";
import topic from "./topic";
import express from "express";

const api = express.Router();

api.use("/account", account);
api.use("/profile", profile);
api.use("/topic", topic);

export default api;
