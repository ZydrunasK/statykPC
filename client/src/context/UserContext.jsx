/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
    role: 'public',
    userId: -1,
    email: '',
    username: '',
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
    const [userId, setUserId] = useState(initialContext.userId);
    const [email, setEmail] = useState(initialContext.email);
    const [username, setUsername] = useState(initialContext.username);
    const [isLoggedIn, setIsLoggedIn] = useState(initialContext.isLoggedIn);

    useEffect(() => {
        fetch('http://localhost:5123/api/login', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'error') {
                logout()
            } else {
                login(data)
            }
        })        
    }, [])

    function handleVisible() {
        setVisible(pre => !pre);
    }
    function login(userData) {
        setIsLoggedIn(() => true);
        setRole(() => userData.role);
        setUserId(() => userData.id);
        setEmail(() => userData.email);
        setUsername(() => userData.username);
    }
    function logout() {
        setIsLoggedIn(() => false);
        setRole(() => initialContext.role);
        setUserId(() => initialContext.userId);
        setEmail(() => initialContext.email);
        setUsername(() => initialContext.username);
    }


    const value = {
        role,
        userId,
        email,
        username,
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