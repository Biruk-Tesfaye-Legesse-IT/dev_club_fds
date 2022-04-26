import http from "../../helpers/client/api.client";

const SCOUT_ENDPOINT = "/api/scouts/"

class ScoutDataService {
    getAllScouts = () => http.get(`${SCOUT_ENDPOINT}`);

    getScout(id) {
        return http.get(`${SCOUT_ENDPOINT}${id}/`);
    }

    createScout(data) {
        return http.post(`${SCOUT_ENDPOINT}`, data);
    }

    updateScout(id, data) {
        return http.put(`${SCOUT_ENDPOINT}${id}`, data);
    }

    deleteScout(id) {
        return http.delete(`${SCOUT_ENDPOINT}${id}`);
    }

    deleteAllScouts() {
        return http.delete(`${SCOUT_ENDPOINT}`);
    }
    
    findScoutByTitle(title) {
        return http.get(`${SCOUT_ENDPOINT}?title=${title}`);
    }
}
export default new ScoutDataService();
