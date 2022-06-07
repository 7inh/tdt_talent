import database from "src/database/database";
import { createJob } from "./job.mutation";
import { getAllJob } from "./job.query";

const JobService = {
    query: {
        getAllJob: getAllJob,
    },
    mutation: {
        createJob: async (job: any) => {
            const trx = await database.transaction();
            try {
                const [newCreatedJob] = await createJob(trx, job);
                trx.commit();

                return newCreatedJob;
            } catch (error) {
                console.error(error);
                trx.rollback();
                throw error;
            }
        },
        updateJob: async (job: any) => {
            const trx = await database.transaction();
            try {
                const [newCreatedJob] = await createJob(trx, job);
                trx.commit();

                return newCreatedJob;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default JobService;
