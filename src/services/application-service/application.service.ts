import database from "src/database/database";
import NotificationService from "../notification-service/notification.service";
import { applyJob, setApplicationState } from "./application.mutation";
import { getByCandidate, getByCompany, getById } from "./application.query";

const ApplicationService = {
    query: {
        getById: getById,
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

                NotificationService.mutation.createNotification({
                    from: candidate_id,
                    to: company_id,
                    job_id: job_id,
                    action: "applied",
                });

                trx.commit();

                return applyJobReturning;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
        setApplicationState: async (application: any) => {
            const trx = await database.transaction();
            try {
                const [updatedApplication] = await setApplicationState(trx, application);

                NotificationService.mutation.createNotification({
                    from: application.company_id,
                    to: application.candidate_id,
                    job_id: application.job_id,
                    action: application.state,
                });

                trx.commit();

                return updatedApplication;
            } catch (error) {
                trx.rollback();
                throw error;
            }
        },
    },
};

export default ApplicationService;
