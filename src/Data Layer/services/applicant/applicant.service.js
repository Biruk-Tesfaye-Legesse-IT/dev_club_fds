import http from "../../helpers/client/api.client";

const EVENT_ENDPOINT = "/api/event/"
const PLAYER_ENDPOINT = "/api/players/"

class ApplicantDataService {
    getAllApplicants(eventID) {
        let applicants = http.get(`${EVENT_ENDPOINT}${eventID}`).then(
            response => response
        );
        console.log(applicants);
    }
    getPlayer(playerID) {
        return http.get(`${PLAYER_ENDPOINT}${playerID}`);
    }
    approveApplicant(eventID, applicantId) {
        // return http.post(`${APPLICANT_ENDPOINT}`, data);
    }
    disapproveApplicant(id) {
        // return http.delete(`${APPLICANT_ENDPOINT}${id}`);
    }
}
export default new ApplicantDataService();