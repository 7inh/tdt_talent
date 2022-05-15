import express from "express";

const ProfileController = {
    createProfile: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;

        } catch (e) {

        }
    },
};

export default ProfileController;
