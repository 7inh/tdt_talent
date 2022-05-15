import database from "src/database/database";

export async function getAccountByEmail(email: string) {
    return await database("account")
        .select(["email", "role"])
        .where({
            email,
            deleted_at: null,
        })
        .first();
}
