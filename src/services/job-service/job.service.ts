import database from "src/database/database";
import NotificationService from "../notification-service/notification.service";
import { createJob, setJobState } from "./job.mutation";
import { getAllJob, getByCompany, getDetail } from "./job.query";

const JobService = {
    query: {
        getAllJob: getAllJob,
        getByCompany: getByCompany,
        getDetail: getDetail,
    },
    mutation: {
        createJob: async (job: any) => {
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
        setJobState: async (job: any) => {
            const trx = await database.transaction();
            try {
                const [updatedJob] = await setJobState(trx, job);

                NotificationService.mutation.createNotification({
                    from: job.approver,
                    to: updatedJob.account_id,
                    job_id: job.id,
                    action: job.state,
                });

                trx.commit();

                return updatedJob;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default JobService;
