/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AddAToys from '../components/pages/AddATOys/AddAToys';
import Home from '../components/pages/HomePage/Home';
import ForgotPassword from '../components/pages/Login&Register/ForgotPassword';
import Login from '../components/pages/Login&Register/Login';
import Register from '../components/pages/Login&Register/Register';
import SingleToyDetails from '../components/pages/ToyDetails/SingleToyDetails';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'single-toy-details/:id',
                element: (
                    <PrivateRoute>
                        <SingleToyDetails />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => fetch(`http://localhost:8080/single-toys-details/${params.id}`)
            },
            {
                path: '/add-a-toys',
                element: <AddAToys />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            }
        ]
    }
]);
