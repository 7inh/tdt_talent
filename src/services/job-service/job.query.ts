import database from "src/database/database";

export async function getAllJob() {
    return await database("job")
        .select({
            id: "job.id",
            title: "job.title",
            company_id: "profile.account_id",
            company_name: "profile.full_name",
            company_avatar: "profile.avatar_url",
            created_at: "job.created_at",
            location: "job.location",
            position: "position.title",
            state: "job.state",
            employment_type: "job.employment_type",
        })
        .join("profile", "profile.account_id", "job.account_id")
        .join("position", "position.id", "job.position_id")
        .orderBy("created_at", "desc");
}

export async function getByCompany(id: number) {
    return await database("job")
        .select({
            id: "job.id",
            title: "job.title",
            state: "job.state",
            created_at: "job.created_at",
        })
        .leftJoin("application", "application.job_id", "job.id")
        .count({ total: "application.id" })
        .where({ "job.account_id": id })
        .groupBy("job.state", "job.created_at", "job.title", "job.id")
        .orderBy("job.created_at", "desc");
}

export async function getDetail(job_id: number) {
    return await database("job")
        .select({
            title: "job.title",
            company_name: "profile.full_name",
            employment_type: "job.employment_type",
            created_at: "job.created_at",
            expire_date: "job.expire_date",
            location: "job.location",
            salary: "job.salary",
            position: "position.title",
            experience_requirement: "job.experience_requirement",
            description: "job.description",
        })
        .join("profile", "profile.account_id", "job.account_id")
        .join("position", "position.id", "job.position_id")
        .where({ "job.id": job_id });
}
