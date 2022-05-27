import express from "express";
import PositionService from "src/services/position-service/position.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const PositionController = {
    getAllPosition: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const positionsDatabase = await PositionService.query.getAllPosition();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(positionsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default PositionController;
