import http from "../../helpers/client/api.client";
import EventDataService from "../event/event.service";


const PLAYER_ENDPOINT = "/api/players/"
const RESULT_ENDPOINT = "/api/grade/"

class CandidateDataService {

    getResult(playerID) {
        return http.get(`${RESULT_ENDPOINT}${playerID}`);
    }

    async getAllCandidates(eventID) {
        let candidates = [];
        let event = await EventDataService.getEvent(eventID);
        let candidateIDs = Array.from(event.data.candidates);
        let response = await Promise.all(candidateIDs.map(candidateID => http.get(`${PLAYER_ENDPOINT}${candidateID}`)));
        candidates = response.map(player => player.data);
        return candidates;
    }

    async getCandidate(eventID, applicantId) {
        let candidates = [];
        let event = await EventDataService.getEvent(eventID);
        let candidateIDs = Array.from(event.data.candidates);
        let response = await Promise.all(candidateIDs.map(candidateID => http.get(`${RESULT_ENDPOINT}${candidateID}`)));
        candidates = response.map(player => player.data);
        return candidates;
    }
   
    acceptCandidate(eventID, applicantId) {
        return http.post(`api/event_actions/${eventID}/accept_players/`, {
            players: [applicantId]
        });
    }
    
}
export default new CandidateDataService();