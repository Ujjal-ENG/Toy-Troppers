/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app from '../config/firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [loading, setIsLoading] = useState(false);
    const [privateLoad, setPrivateLoad] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();
    const createUser = async (name, photo, email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, {
                displayName: name,
                photoURL: photo
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User is Created Successfully!!!',
                showConfirmButton: false,
                timer: 1500
            });

            signOut(auth);
            setIsLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error while creating user!!'
            });
        }
    };

    const signInUser = async (email, password) => {
        setIsLoading(true);
        setPrivateLoad(true);
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User is Logged in Successfully!!!',
                showConfirmButton: false,
                timer: 1500
            });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Email or Password!!!'
            });
            navigate('/login');
        }
    };

    const logOutUser = async () => {
        await signOut(auth);
        navigate('/');
    };

    const singInGoogle = async () => {
        setIsLoading(true);
        try {
            await signInWithPopup(auth, provider);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Logged In using Google!!',
                showConfirmButton: false,
                timer: 1500
            });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error ocurred while user try to SignIn with Google!!'
            });
        }
    };

    const updateUserProfile = async (name, photo) => {
        await updateProfile(userInfo, {
            displayName: name,
            photoURL: photo
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User name and picture is Updated Successfully!!!',
            showConfirmButton: false,
            timer: 1500
        });
    };

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Your Email,also check your spam folder!!!'
        });
        navigate('/login');
    };
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setPrivateLoad(false);
        });
        return () => unSubscriber();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <progress className="progress w-56" />
            </div>
        );
    }

    const auths = {
        privateLoad,
        userInfo,
        createUser,
        signInUser,
        logOutUser,
        singInGoogle,
        updateUserProfile,
        resetPassword
    };

    return <AuthContext.Provider value={auths}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
