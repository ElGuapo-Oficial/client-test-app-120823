import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const login = (token: string) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};

export default useAuth;