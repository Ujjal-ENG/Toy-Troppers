import React from 'react';
import BannerSlider from './BannerSlider';
import StatsSection from './StatsSection';
import ToyGallery from './ToyGallery';
import WhyWeAreBest from './WhyWeAreBest';

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <StatsSection />
            <ToyGallery />
            <WhyWeAreBest />
        </div>
    );
};

export default Home;
