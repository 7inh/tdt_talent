import { getNotificationByAccount } from "./notification.query";

const NotificationService = {
    query: {
        getNotificationByAccount: getNotificationByAccount,
    },
    mutation: {},
};

export default NotificationService;
