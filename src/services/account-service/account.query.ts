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

export async function getDetail(account_id: number) {
    return await database("profile")
        .select({
            full_name: "profile.full_name",
            avatar_url: "profile.avatar_url",
            country: "profile.country",
            address: "profile.address",
            description: "profile.description",
            phone_number: "profile.phone_number",
            contact_mail: "profile.contact_mail",
            website: "profile.website",
        })
        .where({ "profile.account_id": account_id });
}

export async function getAll() {
    return await database("account")
        .select("*")
        .join("profile", "profile.account_id", "account.id")
        .orderBy("account.created_at", "desc");
}

export async function getAllCompany() {
    return await database("account")
        .select("*")
        .join("profile", "profile.account_id", "account.id")
        .where({ role: "company" });
}
