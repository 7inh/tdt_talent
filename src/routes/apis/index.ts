import account from "./account";
import profile from "./profile";
import position from "./position";
import express from "express";

const api = express.Router();

api.use("/account", account);
api.use("/profile", profile);
api.use("/position", position);

export default api;
