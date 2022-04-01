import http from "../../helpers/client/api.client";

const AUTH_ENDPOINT = "/auth"

class EventDataService {
    getAllEvents = () => http().get('/api/events/');

    // getEvent(id) {
    //     return http.get(`api/event/${id}`);
    // }
    // createEvent(data) {
    //     return http.post('api/event', data);
    // }
    // updateEvent(id, data) {
    //     return http.put(`api/event/${id}`, data);
    // }


    signup(email, password) {
        return http.put(`api/event/${id}`, data);
    }


    login(email, password) {
        return http.post(AUTH_ENDPOINT + `/login`, data);
    }


    deleteEvent(id) {
        return http.delete(`api/event/${id}`);
    }
    deleteAllEvents() {
        return http.delete(`api/event/posts`);
    }
    findEventByTitle(title) {
        return http.get(`api/event?title=${title}`);
    }
}
export default new EventDataService();