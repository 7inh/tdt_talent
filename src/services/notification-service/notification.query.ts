import database from "src/database/database";

export async function getNotificationByAccount(account_id: number) {
    return await database("notification")
        // .select(["id", "from", "to", "job_id", "action","read"])
        .select({
            from_name: "profile.full_name",
            from_avatar: "profile.avatar_url",
            action: "notification.action",
            job_title: "job.title",
            created_at: "notification.created_at"
        })
        .join("job", "job.id", "notification.job_id")
        .join("profile", "profile.account_id", "notification.from")
        .where({
            to: account_id,
            "notification.deleted_at": null,
        });
}
