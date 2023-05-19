import React from 'react';
import useTitleChange from '../../../hooks/useTitleChange';
import BannerSlider from './BannerSlider';
import CollectAll from './CollectAll';
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
            <ShopByCategory />
            <CollectAll />
            <StatsSection />
            <ToyGallery />
            <WhyWeAreBest />
            <Geek />
        </div>
    );
};

export default Home;
