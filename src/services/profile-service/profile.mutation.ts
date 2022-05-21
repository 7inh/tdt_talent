import { Knex } from "knex";
import database from "src/database/database";
import { Profile } from "src/utils/types/tables.interface";

export async function createProfile(
    trx: Knex.Transaction<any, any[]>,
    profile: Omit<Profile, "id" | "created_at" | "updated_at" | "deleted_at">
) {
    return await database("profile").transacting(trx).insert(profile).returning("*");
}

export async function updateProfile(
    trx: Knex.Transaction<any, any[]>,
    profile: Omit<Profile, "created_at" | "updated_at" | "deleted_at">,
    profile_id: number
) {
    return await database("profile")
        .transacting(trx)
        .update({ ...profile, updated_at: new Date() })
        .where({
            id: profile_id,
        })
        .returning("*");
}
