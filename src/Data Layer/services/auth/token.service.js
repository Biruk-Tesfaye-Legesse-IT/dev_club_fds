

class TokenService {
    
    getLocalRefreshToken() {
        // const user = JSON.parse(localStorage.getItem("user"));
        const user = JSON.parse(sessionStorage.getItem("user"));
        return user?.refresh;
    }
    getLocalAccessToken() {
        // const user = JSON.parse(localStorage.getItem("user"));
        const user = JSON.parse(sessionStorage.getItem("user"));
        return user?.access;
    }
    updateLocalAccessToken(token) {
        // let user = JSON.parse(localStorage.getItem("user"));
        let user = JSON.parse(sessionStorage.getItem("user"));
        user.accessToken = token;
        // localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("user", JSON.stringify(user));
        
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
}

export default new TokenService();