import axios from "axios";
import { API_BASE } from "../config";

export const changePasswordApi = (oldPassword, newPassword) => {
    const token = localStorage.getItem("access_token")

    return axios.post(
        `${API_BASE}/user/change-pass`, 
        {
            oldPassword,
            newPassword,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
}