import http from "../../helpers/client/api.client";
import axios from "axios";

const AUTH_ENDPOINT = "/api/"

// const currentAccessToken = sessionStorage.getItem("accessToken");

// const currentAccessToken = localStorage.getItem("user");

const currentAccessToken = sessionStorage.getItem("user");


class AuthDataService {
    async login(username, password) {
        return http.post(AUTH_ENDPOINT + "token/", { username, password });
    }

    logout() {
        // localStorage.removeItem("user");
        // sessionStorage.removeItem("APP_STATE");
        sessionStorage.clear();
        
    }

    register(username, email, password) {
        return http.post(AUTH_ENDPOINT + "signup", {
            username,
            email,
            password,
        });
    }
}

export default new AuthDataService();