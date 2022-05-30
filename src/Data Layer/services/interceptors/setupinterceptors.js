import http from "../../helpers/client/api.client.js";
import axios from "axios";
import AuthDataService from "../auth/auth.service";
import { refreshToken } from "../../../Business Layer/thunks/auth/auth.thunk.js";
import dayjs from "dayjs";



const setup = (store) => {

    // const { dispatch } = store;

    http.interceptors.request.use(
        
        ( async config => {
            const token = AuthDataService.getLocalAccessToken();

            console.log('Token',token);
           

            

            if (token){
                const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
                const expiry = decodedToken.exp;
                const currentTime = dayjs().unix();
                console.log('Current time',currentTime);
                console.log('Expiry',expiry);
                console.log('Has Expired',currentTime > expiry);
                console.log('Is Valid', dayjs.unix(decodedToken.exp).isAfter(dayjs()))
                if (dayjs.unix(decodedToken.exp).isAfter(dayjs())){
                    console.log('Token has not expired');
                    config.headers["Authorization"] = 'Bearer ' + token;
                    // config.headers.ABCD = 'ABCD';
                    console.log("Request Interceptor", config);
                    return config;    
                } 
                else{

                    let response = await AuthDataService.refreshToken(AuthDataService.getLocalRefreshToken())
                    config.headers["Authorization"] = 'Bearer ' + `${response.data.access}`;
                    AuthDataService.updateLocalAccessToken(response.data.access);
                    console.log("Request Interceptor for Refresh", config);
                    config._retry = true;
                    return config;
                }      
        } else{
            console.log('Token is not available');
            console.log("Request Interceptor Login supposedly", config);
            return config;

        } 
    
        }), (error) => {
            return Promise.reject(error);
        }
        )};     
    
    
export default setup;
    
    
    
    // http.interceptors.response.use(
    //     (res) => {
    //         console.log("Response Interceptor", res);
    //         return res;
    //     },
    //     async(err) => {
    //         const originalConfig = err.config;
            
    //         if (originalConfig.url !== "/token/" && err.response) {
    //             // Access Token was expired
    //             if (err.response.status === 401 && !originalConfig._retry) {
    //                 originalConfig._retry = true;
    //                 try {
    //                     dispatch(refreshToken(AuthDataService.getLocalRefreshToken()));
    //                     originalConfig.headers["Authorization"] = 'Bearer ' + AuthDataService.getLocalAccessToken();

    //                     return await http(originalConfig);
                        


    //                     // return http(originalConfig);
    //                     // const { accessToken } = rs.data;
    //                     // dispatch(refreshToken(accessToken));
    //                     // AuthDataService.updateLocalAccessToken(accessToken);
    //                     // return http(originalConfig);

    //                 } catch (_error) {
    //                     return Promise.reject(_error);
    //                 }
    //             }
    //         }
    //         return Promise.reject(err);
    //     }
    // );

