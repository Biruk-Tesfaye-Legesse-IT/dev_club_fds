import http from "../../helpers/client/api.client";

const SCOUT_ENDPOINT = "/api/scouts/"

class ScoutDataService {
    getAllScouts = () => http.get(`${SCOUT_ENDPOINT}`);

    getScout(id) {
        return http.get(`${SCOUT_ENDPOINT}${id}/`);
    }

    addEvent(data) {
        return http.post(`${SCOUT_ENDPOINT}`, data);
    }

    updateEvent(id, data) {
        return http.put(`${SCOUT_ENDPOINT}${id}`, data);
    }

    deleteEvent(id) {
        return http.delete(`${SCOUT_ENDPOINT}${id}`);
    }

    deleteAllEvents() {
        return http.delete(`${SCOUT_ENDPOINT}`);
    }
    
    findEventByTitle(title) {
        return http.get(`${SCOUT_ENDPOINT}?title=${title}`);
    }
}
export default new ScoutDataService();
