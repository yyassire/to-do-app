import axios from "axios"


export const BASE_URL = axios.create({
    baseURL: window.location.hostname === "localhost" ? "http://localhost:8800/api/" 
    : "https://to-do-yy.herokuapp.com/api/"
})