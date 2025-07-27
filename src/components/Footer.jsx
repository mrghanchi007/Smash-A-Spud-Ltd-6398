import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Logo from './Logo';

const { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiMessageCircle } = FiIcons;

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiMessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted wholesale partner for food, beverages, and premium snack products. 
              Quality products at competitive wholesale prices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="text-accent-500" />
                <span>Unit 1, 154 Chester Street, Birmingham, B6 4AE</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="text-accent-500" />
                <span>0121 517 2175</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="text-accent-500" />
                <span>info@smashaspud.uk</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white transition-colors">Promotions</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <SafeIcon icon={FiClock} className="mr-2 text-accent-500" />
              Business Hours
            </h3>
            <div className="space-y-1 text-sm text-gray-400">
              <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 4:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <SafeIcon icon={social.icon} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Smash 'A' Spud Ltd. All rights reserved.
          </div>
          <div className="text-sm text-gray-400">
            Powered by{' '}
            <a 
              href="https://www.account4web.ca" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-500 hover:text-accent-400 transition-colors"
            >
              Account4Web Inc
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;