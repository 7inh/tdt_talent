import express from "express";
import ProfileService from "src/services/profile-service/profile.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ProfileController = {
    createProfile: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            const profile = req.body.profile;

            if (profile) {
                const newProfile = await ProfileService.mutation.createProfile({
                    ...profile,
                    account_id: userRequest.id,
                });

                return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status).json(newProfile);
            }

            throw new Error();
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ProfileController;
