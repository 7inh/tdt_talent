import MiddleWare from "src/utils/MiddleWare";
import AccountController from "src/controllers/account.controller";

const express = require("express");
const account = express.Router();

account.get("/login", MiddleWare.auth, AccountController.login);

export default account;
