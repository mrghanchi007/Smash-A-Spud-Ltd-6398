import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPromotions from '../components/home/FeaturedPromotions';
import ProductBanners from '../components/home/ProductBanners';
import AboutSection from '../components/home/AboutSection';
import CategoryGrid from '../components/home/CategoryGrid';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedPromotions />
      <ProductBanners />
      <AboutSection />
      <CategoryGrid />
    </div>
  );
};

export default Home;