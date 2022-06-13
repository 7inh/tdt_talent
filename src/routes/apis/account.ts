import express from "express";
import MiddleWare from "src/utils/middleware";
import AccountController from "src/controllers/account.controller";

const account = express.Router();

account.get("/login", MiddleWare.auth, AccountController.login);

account.get("/get_all", AccountController.getAll);
account.get("/get_all_company", AccountController.getAllCompany);

account.post("/update/:role", MiddleWare.auth, AccountController.updateAccount);

export default account;
