import http from "../../helpers/client/api.client.js";
import TokenService from "../../services/auth/token.service.js";
import { refreshToken } from "../../../Business Layer/thunks/auth/auth.thunk.js";

const setup = (store) => {
    http.interceptors.request.use(
        
        (config) => {
            const token = TokenService.getLocalAccessToken();
            console.log('Token',token);
            if (token) {
                config.headers["Authorization"] = 'Bearer ' + token;
                // config.headers.ABCD = 'ABCD';
            }
            console.log("Request Interceptor", config);
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    
    
    
    const { dispatch } = store;
    
    
    
    http.interceptors.response.use(
        (res) => {
            console.log("Response Interceptor", res);
            return res;
        },
        async(err) => {
            const originalConfig = err.config;
            
            if (originalConfig.url !== "/auth/signin" && err.response) {
                // Access Token was expired
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        const rs = await http.post("/api/token/refresh/", {
                            refresh: TokenService.getLocalRefreshToken(),
                        });
                        const { accessToken } = rs.data;
                        dispatch(refreshToken(accessToken));
                        TokenService.updateLocalAccessToken(accessToken);
                        return http(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err);
        }
    );
};
export default setup;