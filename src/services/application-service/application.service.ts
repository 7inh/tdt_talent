import database from "src/database/database";
import { applyJob } from "./application.mutation";
import { getByCandidate, getByCompany } from "./application.query";

const ApplicationService = {
    query: {
        getByCompany: getByCompany,
        getByCandidate: getByCandidate,
    },
    mutation: {
        applyJob: async ({ job_id, candidate_id, company_id, state }: any) => {
            const trx = await database.transaction();
            try {
                const [applyJobReturning] = await applyJob(trx, {
                    job_id,
                    candidate_id,
                    company_id,
                    state,
                });

                trx.commit();

                return applyJobReturning;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default ApplicationService;
