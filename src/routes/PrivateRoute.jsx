/* eslint-disable react/jsx-indent */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthProvider';

function PrivateRoute({ children }) {
    const { userInfo, privateLoad } = useContext(AuthContext);
    const location = useLocation();
    if (location.pathname.includes('/all-toys/-toy-details')) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }
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
