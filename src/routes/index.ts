import account from "./account";
import profile from "./profile";
import express from "express";

const routes = express.Router();

routes.use("/account", account);
routes.use("/profile", profile);

export default routes;
