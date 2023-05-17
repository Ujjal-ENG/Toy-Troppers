/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

function PrivateRoute({ children }) {
    const { userInfo, privateLoad } = useContext(AuthContext);
    const location = useLocation();

    if (privateLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
