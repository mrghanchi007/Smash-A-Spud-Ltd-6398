import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiStar, FiMapPin } = FiIcons;

const ProductBanners = () => {
  const banners = [
    {
      id: 1,
      title: "Crisps Brochure",
      subtitle: "Download our complete range",
      icon: FiDownload,
      color: "from-purple-500 to-pink-500",
      emoji: "🥔",
      action: "Download PDF",
      link: "#"
    },
    {
      id: 2,
      title: "New Arrival Promotion",
      subtitle: "Fresh products weekly",
      icon: FiStar,
      color: "from-green-500 to-teal-500",
      emoji: "✨",
      action: "View New Items",
      link: "/products"
    },
    {
      id: 3,
      title: "Collection Only",
      subtitle: "Special pickup deals",
      icon: FiMapPin,
      color: "from-orange-500 to-red-500",
      emoji: "🚚",
      action: "View Deals",
      link: "/promotions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Collections
          </h2>
          <p className="text-lg text-gray-600">
            Explore our comprehensive product ranges and special offers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              className="relative group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className={`bg-gradient-to-br ${banner.color} rounded-2xl p-8 text-white relative overflow-hidden shadow-xl`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-4 text-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    {banner.emoji}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-white/90 mb-6">{banner.subtitle}</p>
                  
                  <Link
                    to={banner.link}
                    className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105"
                  >
                    <SafeIcon icon={banner.icon} />
                    <span>{banner.action}</span>
                  </Link>
                </div>

                {/* Floating Platform Effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-white/20 rounded-full blur-sm"
                  animate={{ 
                    scaleX: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;