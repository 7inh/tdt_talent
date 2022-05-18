import express from "express";
import MiddleWare from "src/utils/middleware";
import ProfileController from "src/controllers/profile.controller";

const profile = express.Router();

profile.post("/create", MiddleWare.auth, ProfileController.createProfile);

export default profile;
