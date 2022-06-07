import http from "../../helpers/client/api.client";
import EventDataService from "../event/event.service";

const EVENT_ENDPOINT = "/api/event/"
const PLAYER_ENDPOINT = "/api/players/"

class ApplicantDataService {
    getApplicant(playerID) {
        return http.get(`${PLAYER_ENDPOINT}${playerID}`);
    }

    async getAllApplicants(eventID) {
        let applicants = [];
        let event = await EventDataService.getEvent(eventID);
        let applicantIDs = Array.from(event.data.applicants);
        let response = await Promise.all(applicantIDs.map(applicantID => http.get(`${PLAYER_ENDPOINT}${applicantID}`)));
        applicants = response.map(player => player.data);
        return applicants;
    }
   
    approveApplicant(eventID, applicantId) {
        return http.post(`api/event_actions/${eventID}/approve_as_candidates/`, {
            players: [applicantId]
        });
    }

    disapproveApplicant(id) {
        // return http.delete(`${APPLICANT_ENDPOINT}${id}`);
    }

}
export default new ApplicantDataService();