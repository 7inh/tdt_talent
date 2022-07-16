import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";
import express from "express";
import NotificationService from "src/services/notification-service/notification.service";

const NotificationController = {
    getAllNotification: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const userRequest = req.body.user;

            if (!userRequest) throw new Error();

            const notificationDatabase = await NotificationService.query.getNotificationByAccount(
                userRequest.id
            );

            return res
                .status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status)
                .json(notificationDatabase);
        } catch (error) {
            console.error(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default NotificationController;
