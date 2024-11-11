/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
    role: 'public',
    isLoggedIn: false,
    visible: false,
    handleVisible: () => {},
    login: () => {},
    logout: () => {},
};

export const UserContext = createContext(initialContext);

export function ContextWrapper(props) {

    const [visible, setVisible] = useState(initialContext.visible);
    const [role, setRole] = useState(initialContext.role);
    const [isLoggedIn, setIsLoggedIn] = useState(initialContext.isLoggedIn);

    useEffect(() => {
        fetch('http://localhost:5123/api/login', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => console.log('client side'))

        setIsLoggedIn(() => false);
        setRole(() => 'public');
    }, [])

    function handleVisible() {
        setVisible(pre => !pre);
    }
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
        visible,
        isLoggedIn,
        login,
        logout,
        handleVisible
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
}