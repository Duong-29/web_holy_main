import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "../api/logout";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [auth,setAuth] = useState({
        token: null,
        user: null,
    });

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        const user = localStorage.getItem("user");
        if (token && user) {
            setAuth({ 
                token,
                user: JSON.parse(user), 
            })
        }
    }, [])

    const login = (token, user) => {
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setAuth({ token, user });
    };

    const logout = async () => {
        try {
            if (auth.token) {
                await logoutApi(auth.token)
            }
        } catch (err) {
            console.warn("Logout API failed")
        } finally {
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
            setAuth({ token: null, user: null });
            navigate("/login")
        }
    };

    const isAuthenticated = !!auth.token

    return (
        <AuthContext.Provider 
            value={{
                auth,
                user: auth.user,
                token: auth.token,
                isAuthenticated, 
                login, 
                logout 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)