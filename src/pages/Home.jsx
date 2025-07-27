import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturedPromotions from '../components/home/FeaturedPromotions';
import ProductBanners from '../components/home/ProductBanners';
import AboutSection from '../components/home/AboutSection';
import CategoryGrid from '../components/home/CategoryGrid';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Smash 'A' Spud Ltd - Premium Wholesale Food & Beverages</title>
        <meta name="description" content="Your trusted partner for quality snacks, drinks, and specialty products at unbeatable wholesale prices. Premium wholesale food and beverage supplier." />
        <meta name="keywords" content="wholesale, food, beverages, snacks, drinks, supplier, Smash A Spud, premium products" />
        <link rel="canonical" href="https://smashaspud.com" />
        <meta property="og:title" content="Smash 'A' Spud Ltd - Premium Wholesale Food & Beverages" />
        <meta property="og:description" content="Your trusted partner for quality snacks, drinks, and specialty products at unbeatable wholesale prices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smashaspud.com" />
      </Helmet>
      <HeroSection />
      <FeaturedPromotions />
      <ProductBanners />
      <AboutSection />
      <CategoryGrid />
    </div>
  );
};

export default Home;