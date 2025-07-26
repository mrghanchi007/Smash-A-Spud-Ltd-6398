import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiPercent, FiTrendingUp } = FiIcons;

const FeaturedPromotions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Summer Drinks Special",
      description: "Get 25% off all beverage orders over £500",
      discount: "25% OFF",
      icon: FiPercent,
      bg: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Crisp Collection Deal",
      description: "Buy 10 cases, get 2 FREE on premium crisps",
      discount: "2 FREE",
      icon: FiStar,
      bg: "from-orange-500 to-yellow-400"
    },
    {
      id: 3,
      title: "Bulk Order Bonus",
      description: "Orders over £1000 get free delivery + 15% off",
      discount: "15% OFF",
      icon: FiTrendingUp,
      bg: "from-green-500 to-emerald-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Promotions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our latest deals and special offers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className={`bg-gradient-to-r ${promotions[currentSlide].bg} p-8 md:p-12 text-white relative`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex-1 mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                      <SafeIcon 
                        icon={promotions[currentSlide].icon} 
                        className="text-3xl mr-3" 
                      />
                      <span className="text-2xl md:text-4xl font-bold">
                        {promotions[currentSlide].discount}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {promotions[currentSlide].title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90">
                      {promotions[currentSlide].description}
                    </p>
                  </div>
                  
                  <motion.div
                    className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <SafeIcon 
                      icon={promotions[currentSlide].icon} 
                      className="text-4xl" 
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPromotions;