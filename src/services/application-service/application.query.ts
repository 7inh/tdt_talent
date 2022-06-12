import database from "src/database/database";

export async function getByCompany(id: number) {
    return await database("application")
        .select({
            id: "application.id",
            job_title: "job.title",
            state: "application.state",
            created_at: "application.created_at",
            candidate_name: "profile.full_name",
            candidate_avatar: "profile.avatar_url",
            candidate_address: "profile.address",
        })
        .join("job", "application.job_id", "job.id")
        .join("profile", "profile.account_id", "application.candidate_id")
        .where({ "application.company_id": id })
        .orderBy("application.created_at", "desc");
}

export async function getByCandidate(id: number) {
    return await database("application")
        .select({
            id: "application.id",
            job_title: "job.title",
            company_name: "profile.full_name",
            company_avatar: "profile.avatar_url",
            company_address: "profile.address",
            employment_type: "job.employment_type",
            salary: "job.salary",
            location: "job.location",
        })
        .join("job", "application.job_id", "job.id")
        .join("profile", "profile.account_id", "application.candidate_id")
        .where({ "application.candidate_id": id })
        .orderBy("application.created_at", "desc");
}
