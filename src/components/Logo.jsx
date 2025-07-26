import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <svg width="50" height="50" viewBox="0 0 100 100" className="text-primary-600">
        {/* Potato character */}
        <motion.ellipse
          cx="50"
          cy="55"
          rx="25"
          ry="30"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        />
        
        {/* Eyes */}
        <motion.circle
          cx="42"
          cy="45"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.circle
          cx="58"
          cy="45"
          r="3"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        />
        
        {/* Pupils */}
        <circle cx="43" cy="45" r="1.5" fill="black" />
        <circle cx="59" cy="45" r="1.5" fill="black" />
        
        {/* Smile */}
        <motion.path
          d="M 42 60 Q 50 68 58 60"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        
        {/* Chef hat */}
        <motion.ellipse
          cx="50"
          cy="25"
          rx="20"
          ry="15"
          fill="#f59e0b"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        />
        
        {/* Hat band */}
        <rect x="30" y="32" width="40" height="4" fill="white" rx="2" />
      </svg>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold text-primary-600"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Smash 'A' Spud
        </motion.span>
        <motion.span 
          className="text-xs text-gray-500 font-medium"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Ltd
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;