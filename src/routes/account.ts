import express from "express";
import MiddleWare from "src/utils/middleware";
import AccountController from "src/controllers/account.controller";

const account = express.Router();

account.get("/login", MiddleWare.auth, AccountController.login);

export default account;
