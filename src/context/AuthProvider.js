import { createContext, useContext, useState } from "react";
import { realAuth } from "../utils/RealAuth";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    const handleLogin = async (username, password) => {
        const token = realAuth(username, password);
        console.log(token);
        if(token != null){
            setToken(token);
            navigate("/landing");
        } else {
            navigate("/home/tryagain");
        }
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={{ value }}>
        {children}
        </AuthContext.Provider>
    );
};

// give callers access to the context
export const useAuth = () => useContext(AuthContext);