import React, { } from 'react';
import HeroSection from '../../components/Home/Hero/Hero';
import FeaturedCategories from '../../components/Home/FeaturedCategories/FeaturedCategories';
import StyleGallery from '../../components/Home/StyleGallery/StyleGallery';
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturedCategories></FeaturedCategories>
            <StyleGallery></StyleGallery>
        </div>
    );
};

export default Home;