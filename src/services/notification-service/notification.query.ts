import database from "src/database/database";

export async function getNotificationByAccount(account_id: number) {
    return await database("notification")
        .select(["id", "from", "to", "job_id", "action","read"])
        .where({
            to: account_id,
            deleted_at: null,
        });
}
