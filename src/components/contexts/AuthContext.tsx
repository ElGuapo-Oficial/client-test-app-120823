import React, { createContext, useState, ReactNode } from  'react';

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (authState: boolean) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const defaultState = {
    isAuthenticated: false,
    setIsAuthenticated: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultState);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const token = localStorage.getItem('authToken');
        return !!token;
    });

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}