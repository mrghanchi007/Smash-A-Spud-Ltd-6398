import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTag, FiUserPlus, FiArrowRight } = FiIcons;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Premium Wholesale
            <br />
            <span className="text-accent-300">Food & Beverages</span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner for quality snacks, drinks, and specialty products at unbeatable wholesale prices
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/promotions"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <SafeIcon icon={FiTag} />
              <span>View Promotions</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
            
            <Link
              to="/contact"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              <SafeIcon icon={FiUserPlus} />
              <span>Wholesale Signup</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Product Images */}
        <motion.div
          className="absolute right-10 top-1/4 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <span className="text-4xl">🥤</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-10 bottom-1/4 hidden lg:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <span className="text-3xl">🍿</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-1/4 bottom-20 hidden lg:block"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <span className="text-2xl">🧀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;