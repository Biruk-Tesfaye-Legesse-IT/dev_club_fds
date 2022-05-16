import http from "../../helpers/client/api.client";
import axios from "axios";
import { set } from "date-fns";
// import Cookies from 'universal-cookie';

const AUTH_ENDPOINT = "/api/"

// const currentAccessToken = sessionStorage.getItem("accessToken");

// const currentAccessToken = localStorage.getItem("user");

const currentAccessToken = sessionStorage.getItem("access");

// const cookies = new Cookies();

class AuthDataService {
    async login(username, password) {
        return http.post(AUTH_ENDPOINT + "token/", { username, password });
    }

    async refreshToken(refresh) {
        return axios.post("http://localhost:8000/api/token/refresh/", { refresh });
    }

    logout() {
        // localStorage.removeItem("user");
        // sessionStorage.removeItem("APP_STATE");
        sessionStorage.clear();    
    }

    getLocalRefreshToken() {
        // const user = JSON.parse(localStorage.getItem("user"));
        const refreshToken = JSON.parse(sessionStorage.getItem("refresh"));
        return refreshToken;
    }
    getLocalAccessToken() {
        // const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = JSON.parse(sessionStorage.getItem("access"));
        return accessToken;
    }

    
    
    setAccessToken(token) {
        sessionStorage.setItem("access", JSON.stringify(token));
    }

    setRefreshToken(token) {
        // cookies.set("refresh", token, { path: "/" }, { expires: new Date(set(new Date(), { hours: 1 })) }, { secure: true }, { sameSite: "None" }, {httpOnly : true} );
        sessionStorage.setItem("refresh", JSON.stringify(token));
    }

    updateLocalAccessToken(token) {
        // let user = JSON.parse(localStorage.getItem("user"));
        let accessToken = JSON.parse(sessionStorage.getItem("access"));
        accessToken = token;
        // localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("access", JSON.stringify(accessToken));
        
    }

    getUser() {
        // return JSON.parse(localStorage.getItem("user"));
        return JSON.parse(sessionStorage.getItem("user"));
    }
    setUser(user) {
        console.log(JSON.stringify(user));
        // localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("user", JSON.stringify(user));
    }
    removeUser() {
        // localStorage.removeItem("user");
        sessionStorage.removeItem("user");
    }


    // register(username, email, password) {
    //     return http.post(AUTH_ENDPOINT + "signup", {
    //         username,
    //         email,
    //         password,
    //     });
    // }
}

export default new AuthDataService();