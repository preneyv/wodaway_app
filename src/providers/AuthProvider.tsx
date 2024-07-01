import React, { createContext, useContext } from 'react';
import useAuthenticated from "../hooks/useAuthenticated.tsx";

type T_Auth_Context = {
    isAuthenticated : boolean,
    loading : boolean
}

const AuthContext = createContext<T_Auth_Context>({loading : false, isAuthenticated : false});

type T_AuthProvider = {
    children : React.ReactNode
}
export const AuthProvider = ({ children } : T_AuthProvider) => {
    const auth = useAuthenticated();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
