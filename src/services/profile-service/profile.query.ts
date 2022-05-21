import database from "src/database/database";

export async function getProfileByAccountId(account_id: number) {
    return await database("profile")
        .select("*")
        .where({
            account_id,
            deleted_at: null,
        })
        .orderBy("created_at", "desc")
        .first();
}
