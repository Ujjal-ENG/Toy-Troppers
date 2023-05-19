import React from 'react';
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
    return (
        <div>
            <BannerSlider />
            <Brands />
            <ShopByCategory />
            <CollectAll />
            <StatsSection />
            <ToyGallery />
            <WhyWeAreBest />
            <Geek />
            <ContactUs />
        </div>
    );
};

export default Home;
