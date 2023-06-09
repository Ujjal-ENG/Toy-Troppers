/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
    const [counter, setCounter] = useState(0);
    const targetValue = 10000; // Define the target value for the counter

    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Adjust the threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsInView(entry.isIntersecting);
        }, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            let currentValue = 0;
            const increment = Math.ceil(targetValue / 100); // Adjust the increment as needed
            const interval = setInterval(() => {
                currentValue += increment;
                setCounter(currentValue);

                if (currentValue >= targetValue) {
                    clearInterval(interval);
                }
            }, 10); // Adjust the interval as needed

            return () => {
                clearInterval(interval);
            };
        }
    }, [isInView]);

    return (
        <>
            <h1 data-aos="fade-up" className="text-4xl font-bold tracking-wider text-center pt-12">
                Stats
            </h1>
            <div data-aos="fade-up" ref={sectionRef} className="flex  justify-center py-9 items-center">
                <div className="stats md:stats-horizontal stats-vertical shadow max-w-5xl w-full">
                    <div className="stat place-items-center">
                        <div className="stat-title">Visitors</div>
                        <div className="stat-value">{counter}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">{counter}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">{counter}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;
