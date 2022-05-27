import database from "src/database/database";

export async function getAllPosition() {
    return await database("position").select("*").orderBy("id", "asc");
}
