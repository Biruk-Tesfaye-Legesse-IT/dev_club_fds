import http from "../../helpers/client/api.client";

const SCOUT_ENDPOINT = "/api/event/"

class ScoutDataService {
    getAllScouts = () => http().get('/api/scouts/');

    getEvent(id) {
        return http().get(`${EVENT_ENDPOINT}${id}`);
    }
    createEvent(data) {
        return http.post(`${EVENT_ENDPOINT}`, data);
    }
    updateEvent(id, data) {
        return http.put(`${EVENT_ENDPOINT}${id}`, data);
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
}
export default new ScoutDataService();
s