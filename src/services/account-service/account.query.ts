import database from "src/database/database";

export async function getAccountByEmail(email: string) {
    return await database("account")
        .select(["email", "role", "id"])
        .where({
            email,
            deleted_at: null,
        })
        .first();
}

export async function getAllCompany() {
    return await database("account")
        .select("*")
        .join("profile", "profile.account_id", "account.id")
        .where({ role: "company" });
}

export async function getProfile(account_id: number) {
    return await database("account")
        .select("*")
        .join("profile", "profile.account_id", "account.id")
        .where({ account_id });
}
