import database from "src/database/database";

export async function getAllTopic() {
    return await database("topic").select("*").orderBy("id", "asc");
}
