/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import useTitleChange from '../../../hooks/useTitleChange';
import BannerSlider from './BannerSlider';
import Brands from './Brands';
import CollectAll from './CollectAll';
import ContactUs from './ContactUs';
import Geek from './Geek';
import ShopByCategory from './ShopByCategory';
import StatsSection from './StatsSection';
import ToyGallery from './ToyGallery';
import WhyWeAreBest from './WhyWeAreBest';

const Home = () => {
    useTitleChange('Home');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);

        return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }, []);

    const closeModal = () => {
        setShowPopup(false);
    };

    return (
        <>
            <BannerSlider />
            <Brands />
            <ShopByCategory />
            <CollectAll />
            <StatsSection />
            <ToyGallery />
            <WhyWeAreBest />
            <Geek />
            <ContactUs />

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
                    <div className="modal-container bg-white w-1/2 md:w-96 mx-auto rounded-lg shadow-lg z-20">
                        <div className="modal-content p-4">
                            <h3 className="text-lg font-bold mb-4">Limited Time Offer!</h3>
                            <p className="mb-4">
                                Hurry up! Get 20% off on your first purchase. Use code <span className="text-orange-500 text-xl font-bold tracking-wider">FIRST20</span> at checkout.
                            </p>
                            <button type="button" htmlFor="close-modal" className="btn btn-primary" onClick={closeModal}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Put this part before the </body> tag */}
            <input type="checkbox" id="close-modal" className="modal-toggle" />
        </>
    );
};

export default Home;
