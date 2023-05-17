import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/App.Routes';

AOS.init();
AOS.refresh();
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
