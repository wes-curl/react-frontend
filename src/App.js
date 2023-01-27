import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Landing } from "./Landing";
import { Home } from "./Home";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { AuthProvider } from "./context/AuthProvider";
import { Tryagain } from './Tryagain';

export const AuthContext = React.createContext(null); // we will use this in other components

const App = () => {
        const token = React.useState(null);
        return ( 
            <AuthProvider>
                <Navigation/>

                <h1> React Router </h1>
                <Routes>
                    <Route index element = { <Home/> }/> 
                    <Route path = "landing"
                        element = { 
                            <ProtectedRoute>
                                <Landing/>
                            </ProtectedRoute>
                        }/> 
                    <Route path = "home" element = { <Home/> }/> 
                    <Route path = "home/tryagain" element = { <Tryagain/> }/> 
                    <Route path = "*" element = { < p > There 's nothing here: 404!</p>}/> 
                </Routes> 
            </AuthProvider>   
        );
        };

        const Navigation = () => {
            const { value } = useAuth();
            return ( 
                <nav>
                <NavLink to = "/home" > Home </NavLink> 
                <NavLink to = "/landing" > Landing </NavLink> {
                    value.token && ( 
                        <button type = "button" onClick = { value.onLogout }> Sign Out </button>
                    )
                } 
                </nav>
            );
        };


        export default App;