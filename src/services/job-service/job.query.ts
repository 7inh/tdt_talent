import database from "src/database/database";

export async function getAllJob() {
    return await database("job").select("*").orderBy("created_at", "desc");
}
