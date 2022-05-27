import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("job").del();

    // Inserts seed entries
    await knex("job").insert([
        { account_id : 2, position_id: 1, title: "Graphic Design", description: "Design for Website, Mobile and Game", salary : 2000, location: "Ha Noi", employment_type: "Fulltime", experience_requirement: 4, candidate_limit: 3, state: "Active"},
        { account_id : 2, position_id: 2, title: "Trainee Web Designer", description: "Design for Website, Mobile and Game", salary : 1000, location: "TP Ho Chi Minh", employment_type: "Fulltime", experience_requirement: 1, candidate_limit: 5, state: "pending"},
        { account_id : 9, position_id: 3, title: "Software Engineer", description: "Design for Website, Mobile and Game", salary : 200, location: "Da Nang",  employment_type: "Partime", experience_requirement: 4, candidate_limit: 5, state: "pending"},
        { account_id : 9, position_id: 4, title: "Junior UX Designer", description: "Design for Website, Mobile and Game", salary : 3000, location: "Ha Noi", employment_type: "Fulltime", experience_requirement: 3, candidate_limit: 3, state: "pending"},
        { account_id : 9, position_id: 5, title: "Principal UX Designer", description: "Design for Website, Mobile and Game", salary : 1200, location: "Da Nang", employment_type: "Partime", experience_requirement: 2, candidate_limit: 4, state: "pending"},
        { account_id : 9, position_id: 6, title: "Senior UX Designer", description: "Design for Website, Mobile and Game", salary : 2300, location: "Ha Noi",  employment_type: "Partime", experience_requirement: 1, candidate_limit: 5, state: "expired"},
        { account_id : 9, position_id: 4, title: "Graphic Design", description: "Design for Website, Mobile and Game", salary : 2100, location: "Ha Noi",  employment_type: "Fulltime", experience_requirement: 3, candidate_limit: 4, state: "rejected"},
        { account_id : 2, position_id: 3, title: "Intern UX Designer", description: "Design for Website, Mobile and Game", salary : 1200, location: "Ha Noi", employment_type: "Partime", experience_requirement: 4, candidate_limit: 2, state: "expired"},
        { account_id : 2, position_id: 3, title: "Graphic Design", description: "Design for Website, Mobile and Game", salary : 300, location: "TP Ho Chi Minh", employment_type: "Partime", experience_requirement: 2, candidate_limit: 3, state: "Active"},
    ]);
}
