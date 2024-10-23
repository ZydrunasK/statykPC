/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
    role: 'public',
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    tableMaker: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {

    const [role, setRole] = useState(initialContext.role);
    const [isLoggedIn, setIsLoggedIn] = useState(initialContext.isLoggedIn);

    useEffect(() => {
        setIsLoggedIn(() => false);
        setRole(() => 'public');
    }, [])

    function login() {
        setIsLoggedIn(() => true);
        setRole(() => 'user');
    }
    function logout() {
        setIsLoggedIn(() => false);
        setRole(() => 'public');
    }


    const value = {
        role,
        isLoggedIn,
        login,
        logout,
    };

    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}