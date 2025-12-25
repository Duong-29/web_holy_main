import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user,setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setUser({ token })
        }
    }, [])

    const login = (token, userInfo = {}) => {
        localStorage.setItem("token", token)
        setUser(userInfo);
    }

    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)