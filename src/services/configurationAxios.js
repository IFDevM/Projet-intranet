
import axios from "axios"
import { getToken } from "./storages";

const AXIOS = axios.create({
     baseURL: 'http://localhost:7000/api/',
     timeout: 1000,
});

// ajout d’un intercepteur de requête
AXIOS.interceptors.request.use((request) => {
     // faire quelque chose avant que la requête ne soit envoyée
     request.headers.Accept = "application/json"
     request.headers.Authorization = `Bearer ${getToken()}`
     return request;
 },
     (error) => {
         // faire quelque chose en cas d’erreur
         return Promise.reject(error);
     });
 
export default AXIOS
