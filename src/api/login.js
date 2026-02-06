import axios from "axios";
import { API_BASE } from "../config";

export const loginApi = (username, password) => {
    return axios.post(`${API_BASE}/user/login`, {
        username,
        password,
    }, {withCredentials: true});
}