import { getByCandidate, getByCompany } from "./application.query";

const ApplicationService = {
    query: {
        getByCompany: getByCompany,
        getByCandidate: getByCandidate,
    },
    mutation: {},
};

export default ApplicationService;
