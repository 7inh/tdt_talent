import express from "express";
import ProfileService from "src/services/profile-service/profile.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ProfileController = {
    upsertProfile: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;
            const profileRequest = req.body.profile;
            const profileDatabase = await ProfileService.query.getProfileByAccountId(
                userRequest.id
            );

            console.log({
                ...profileRequest,
                account_id: userRequest.id,
            });

            const profileUpdated = profileDatabase
                ? await ProfileService.mutation.updateProfile({
                      ...profileDatabase,
                      ...profileRequest,
                      account_id: userRequest.id,
                  })
                : await ProfileService.mutation.createProfile({
                      ...profileRequest,
                      account_id: userRequest.id,
                  });

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.CREATED].status).json(profileUpdated);
        } catch (e) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getProfile: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const userRequest = req.body.user;
            const profileDatabase = await ProfileService.query.getProfileByAccountId(
                userRequest.id
            );

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(profileDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ProfileController;
