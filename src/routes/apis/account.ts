import express from "express";
import MiddleWare from "src/utils/middleware";
import AccountController from "src/controllers/account.controller";

const account = express.Router();

account.get("/login", MiddleWare.auth, AccountController.login);
account.post("/update", MiddleWare.auth, AccountController.updateAccount);
account.get("/get_all_company", AccountController.getAllCompany);

export default account;
