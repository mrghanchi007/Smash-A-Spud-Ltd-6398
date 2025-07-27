import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Light Effect Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-200 rounded-full blur-xl opacity-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.5, 0.8, 1.2, 1],
          opacity: [0, 0.7, 0.3, 0.6, 0]
        }}
        transition={{ 
          duration: 2,
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
      
      {/* Logo Image with Funny Animation */}
      <motion.div className="relative">
        <motion.img
          src="/img/Logo.png"
          alt="Smash 'A' Spud Ltd Logo"
          className="h-12 w-auto relative z-10"
          initial={{ 
            scale: 0, 
            rotate: -180,
            y: -50,
            filter: "brightness(0)"
          }}
          animate={{ 
            scale: [0, 1.2, 0.9, 1.1, 1],
            rotate: [-180, 0, 10, -5, 0],
            y: [-50, 0, -5, 3, 0],
            filter: ["brightness(0)", "brightness(1.5)", "brightness(1)"]
          }}
          transition={{ 
            duration: 1.5,
            delay: 0.3,
            ease: "easeOut"
          }}
          whileHover={{
            rotate: [0, 5, -5, 0],
            scale: 1.1,
            filter: "brightness(1.2)"
          }}
        />
        
        {/* Sparkle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10]
            }}
            transition={{ 
              duration: 1.5,
              delay: 0.8 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}
      </motion.div>
      
      {/* Text with Bounce Animation */}
      <div className="flex flex-col relative z-10">
        <motion.span 
          className="text-xl font-bold text-primary-600"
          initial={{ x: -50, opacity: 0, scale: 0.5 }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: [0.5, 1.2, 0.9, 1.1, 1]
          }}
          transition={{ 
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          Smash 'A' Spud
        </motion.span>
        <motion.span 
          className="text-xs text-gray-500 font-medium"
          initial={{ x: -50, opacity: 0, scale: 0.5 }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: [0.5, 1.2, 0.9, 1.1, 1]
          }}
          transition={{ 
            delay: 1.0,
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          Ltd
        </motion.span>
      </div>
      
      {/* Floating Light Particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 2,
            delay: 1.2 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}
    </motion.div>
  );
};

export default Logo;