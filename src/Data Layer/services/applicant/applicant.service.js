import http from "../../helpers/client/api.client";

const APPLICANT_ENDPOINT = "/api/players/"

class ApplicantDataService {
    getAllApplicants = () => http.get(`${APPLICANT_ENDPOINT}`);

    getAplicant(id) {
        return http.get(`${APPLICANT_ENDPOINT}${id}`);
    }
    createApplicant(data) {
        return http.post(`${APPLICANT_ENDPOINT}`, data);
    }
    updateApplicant(id, data) {
        return http.put(`${APPLICANT_ENDPOINT}${id}/`, data);
    }
    deleteApplicant(id) {
        return http.delete(`${APPLICANT_ENDPOINT}${id}`);
    }
    deleteAllApplicants() {
        return http.delete(`${APPLICANT_ENDPOINT}`);
    }
    findApplicantByTitle(title) {
        return http.get(`${APPLICANT_ENDPOINT}?title=${title}`);
    }
}
export default new ApplicantDataService();