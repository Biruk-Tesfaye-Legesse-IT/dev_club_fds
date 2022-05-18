import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const token = sessionStorage.getItem("access");

const http = axios.create({
    baseURL: url,
    // baseURL: 'http://localhost:8000/',
    responseType: 'json',
    headers: {
        // "Content-Type": "application/json",
        // "Content-Type": " text/plain",
       
        // "Authorization": `Bearer ${localStorage.getItem('access')}` 
    }
});

export default http;















// instance.interceptors.request.use(
//     function (config) {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         if (error.response.status === 401) {
//             localStorage.removeItem("token");
//             window.location.reload();
//         }
//         return Promise.reject(error);
//     }
// );




// export default axios.create({
//     baseURL: "http://localhost:8000",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

// this file can also be called http-common.js