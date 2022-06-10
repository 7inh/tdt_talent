import database from "src/database/database";

export async function getAllJob() {
    return await database("job").select("*").orderBy("created_at", "desc");
}

export async function getDetail(job_id: number) {
    return await database("job")
        .select({
            "title": "job.title",
            "company_name": "profile.full_name",
            "employment_type": "job.employment_type",
            "created_at": "job.created_at",
            "expire_date": "job.expire_date",
            "location": "job.location",
            "salary": "job.salary",
            "position": "position.title",
            "experience_requirement": "job.experience_requirement",
            "description": "job.description",
        })
        .join("profile", "profile.account_id", "job.account_id")
        .join("position", "position.id", "job.position_id")
        .where({ "job.id": job_id });
}
