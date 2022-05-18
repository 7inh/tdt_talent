export const ERROR_MESSAGE = {
    INVALID_EMAIL: "INVALID_EMAIL",
    UNAUTHORIZED: "UNAUTHORIZED",
    BAD_REQUEST: "BAD_REQUEST",
};

export const ERROR_DETAIL = {
    [ERROR_MESSAGE.BAD_REQUEST]: {
        message: "Bad request",
        status: 400,
    },
    [ERROR_MESSAGE.UNAUTHORIZED]: {
        message: "unauthorized",
        status: 401,
    },
    [ERROR_MESSAGE.INVALID_EMAIL]: {
        message: "Invalid email address",
        status: 403,
    },
};

export const SUCCESS_MESSAGE = {
    CREATED: "CREATED",
};

export const SUCCESS_DETAIL = {
    [SUCCESS_MESSAGE.CREATED]: {
        status: 201,
        message: "Created"
    },
};

export const VALID_EMAIL = "@gmail.com";
