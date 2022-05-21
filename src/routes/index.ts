import account from "./account";
import profile from "./profile";
import topic from "./topic";
import express from "express";

const routes = express.Router();

routes.use("/account", account);
routes.use("/profile", profile);
routes.use("/topic", topic);

export default routes;
