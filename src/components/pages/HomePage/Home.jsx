import React from 'react';
import BannerSlider from './BannerSlider';
import ShopByCategory from './ShopByCategory';
import StatsSection from './StatsSection';
import ToyGallery from './ToyGallery';
import WhyWeAreBest from './WhyWeAreBest';

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <ShopByCategory />
            <StatsSection />
            <ToyGallery />
            <WhyWeAreBest />
        </div>
    );
};

export default Home;
