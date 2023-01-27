import { createContext, useContext, useState } from "react";
import { realAuth } from "../utils/RealAuth";
import { signup } from "../utils/Signup";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    const handleLoginSubmit = async(username, password) => {
        const token = await realAuth(username, password);
        console.log(token);
        if (token != null) {
            setToken(token);
            navigate("/landing");
        } else {
            navigate("/home/tryagain");
        }
    };

    const handleSignupSubmit = async(username, password) => {
        const token = await signup(username, password);
    };

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLoginSubmit,
        onSignup: handleSignupSubmit,
        onLogout: handleLogout,
    };

    return ( <AuthContext.Provider value = {
        { value }
    } > { children } </AuthContext.Provider>);
};

// give callers access to the context
export const useAuth = () => useContext(AuthContext);