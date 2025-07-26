import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPercent } = FiIcons;

const TopBar = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2 px-4"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-center text-sm font-medium">
        <SafeIcon icon={FiPercent} className="mr-2 animate-pulse" />
        <span className="animate-pulse">Get 15% Off Your First Wholesale Order!</span>
      </div>
    </motion.div>
  );
};

export default TopBar;