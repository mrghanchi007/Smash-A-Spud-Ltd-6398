import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Logo from './Logo';

const { FiMenu, FiX, FiHome, FiPackage, FiTag, FiPhone } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/products', label: 'Products', icon: FiPackage },
    { path: '/promotions', label: 'Offers & Promotions', icon: FiTag },
    { path: '/contact', label: 'Contact', icon: FiPhone },
  ];

  return (
    <motion.header 
      className="bg-white shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="text-sm" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon 
              icon={isMenuOpen ? FiX : FiMenu} 
              className="text-2xl text-gray-700" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden py-4 border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <SafeIcon icon={item.icon} />
                <span>{item.label}</span>
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;