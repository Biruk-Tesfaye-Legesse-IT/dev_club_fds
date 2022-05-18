import http from "../../helpers/client/api.client";

const ACCOUNT_ENDPOINT = "/api/clubs/"

class AccountDataService {
    getAccount(id) {
        return http.get(`${ACCOUNT_ENDPOINT}${id}`);
    }
    createAccount(data) {
        return http.post(`${ACCOUNT_ENDPOINT}`, data);
    }
    updateAccount(id, data) {
        return http.patch(`${ACCOUNT_ENDPOINT}${id}/`, data);
    }
    updateLocalAccount = (data) =>{
        sessionStorage.setItem('user', data);
    }; 
    deleteAccount(id) {
        return http.delete(`${ACCOUNT_ENDPOINT}${id}`);
    }
}
export default new AccountDataService();