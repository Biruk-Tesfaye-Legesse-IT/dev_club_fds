import http from "../../helpers/client/api.client";

const EVENT_ENDPOINT = "/api/events/"
const API_ENDPOINT = "/api/"

class EventDataService {
    getAllEvents = () => http.get(`${EVENT_ENDPOINT}`);

    getEvent(id) {
        return http.get(`${EVENT_ENDPOINT}${id}`);
    }
    createEvent(data) {
        return http.post(`${EVENT_ENDPOINT}`, data);
    }
    updateEvent(id, data) {
        return http.patch(`${EVENT_ENDPOINT}${id}/`, data);
    }
    deleteEvent(id) {
        return http.delete(`${EVENT_ENDPOINT}${id}`);
    }
    deleteAllEvents() {
        return http.delete(`${EVENT_ENDPOINT}`);
    }
    findEventByTitle(title) {
        return http.get(`${EVENT_ENDPOINT}?title=${title}`);
    }
    buildTeams(eventId) {
        return http.post(`${API_ENDPOINT}build_teams/, ${eventId}`);
    }
    checkFormation(id){
        return http.get(`${EVENT_ENDPOINT}/check-formation/${id}/`);
    }
    closeEvent(id) {
        return http.post(`${EVENT_ENDPOINT}${id}/close`);
    }
}
export default new EventDataService();