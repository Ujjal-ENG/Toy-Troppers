/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from './assets/json/page-not-found-error-404.json';

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <div
                data-aos="zoom-in-up"
                data-aos-offset="100"
                data-aos-delay="30"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
                <Lottie options={defaultOptions} height={700} width={600} />
            </div>
            <p className="text-xl font-bold tracking-wider text-center">Sorry, the page you are looking for does not exist.</p>
            <div className="w-full flex justify-center my-6">
                <Link to="/" className="btn btn-wide font-bold text-xl btn-warning">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
