import axios from "axios";
import { API_BASE } from "../config";

export const logoutApi = (token) => {
    return axios.post(
        `${API_BASE}/user/logout`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
}