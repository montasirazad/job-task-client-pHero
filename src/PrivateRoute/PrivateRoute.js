import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { signedInUser } = useContext(AuthContext);
    const location = useLocation();

    if (!signedInUser.email) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    
    return children;
    
};

export default PrivateRoute;