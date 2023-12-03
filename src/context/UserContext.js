import React, { useState } from "react";

const UserContext = React.createContext({ name: '', isAuthenticated: false });

const UserProvider = ({ children }) => {

    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({
        name: 'Hoang Huu',
        token: "",
        isAuthenticated: false,
        account:{}
    });

    // Login updates the user data with a name parameter
    const logincontext = (userData) => {
        setUser(userData)
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
            name: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, logincontext, logout }}>
            {children}
        </UserContext.Provider>
    );

}
export { UserProvider, UserContext };