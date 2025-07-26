import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTruck, FiDollarSign, FiShield, FiClock } = FiIcons;

const AboutSection = () => {
  const features = [
    {
      icon: FiTruck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Birmingham and surrounding areas"
    },
    {
      icon: FiDollarSign,
      title: "Wholesale Prices",
      description: "Competitive pricing for bulk orders with attractive margins"
    },
    {
      icon: FiShield,
      title: "Quality Assured",
      description: "All products meet the highest quality standards and safety requirements"
    },
    {
      icon: FiClock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your wholesale needs"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Smash 'A' Spud Ltd
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a leading wholesale distributor specializing in premium food and beverage products. 
              Based in Birmingham, we serve retailers across the UK with our extensive range of snacks, 
              drinks, dairy products, and specialty items.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, competitive pricing, and exceptional service has made us the 
              preferred wholesale partner for businesses of all sizes.
            </p>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={feature.icon} className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Stats */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Why Choose Us?
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-accent-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Products Available</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Customer Support</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;