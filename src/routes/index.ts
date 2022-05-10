import account from "./account";
import express from "express";

const routes = express.Router();

routes.use("/account", account);

export default routes;
