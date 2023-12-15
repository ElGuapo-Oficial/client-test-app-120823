import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../components/customHooks/useAuth'; // Adjust the import path as needed

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;