export const ERROR_MESSAGE = {
    INVALID_EMAIL: "INVALID_EMAIL",
    BAD_REQUEST: "BAD_REQUEST",
};

export const ERROR_DETAIL = {
    [ERROR_MESSAGE.BAD_REQUEST]: {
        message: "Bad request",
        status: 400,
    },
    [ERROR_MESSAGE.INVALID_EMAIL]: {
        message: "Invalid email address",
        status: 403,
    },
};

export const VALID_EMAIL = "@gmail.com";
