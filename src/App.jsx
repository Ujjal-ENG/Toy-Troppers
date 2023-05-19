import AOS from 'aos';
import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';
import AuthProvider from './context/AuthProvider';

const App = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <AuthProvider>
            <div className="my-container">
                <Navbar />

                <Outlet />
                <ScrollRestoration />
            </div>
            <Footer />
        </AuthProvider>
    );
};

export default App;
