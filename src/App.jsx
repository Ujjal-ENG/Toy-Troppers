import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../context/AuthProvider';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
};

export default App;
