import database from "src/database/database";
import { createNotification } from "./notification.mutation";
import { getNotificationByAccount } from "./notification.query";

const NotificationService = {
    query: {
        getNotificationByAccount: getNotificationByAccount,
    },
    mutation: {
        createNotification: async (notification: any) => {
            const trx = await database.transaction();
            try {
                const [newCreatedNotification] = await createNotification(trx, notification);
                trx.commit();

                return newCreatedNotification;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default NotificationService;
