/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/App.Routes';

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: false
});
AOS.refresh();
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
