import express from "express";
import TopicService from "src/services/topic-service/topic.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const TopicController = {
    getAllTopic: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const topicsDatabase = await TopicService.query.getAllTopic();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(topicsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default TopicController;
