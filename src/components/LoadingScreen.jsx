import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 1000);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!showContent && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div className="mb-8">
              <motion.img
                src="/img/Logo.png"
                alt="Smash 'A' Spud Ltd Logo"
                className="h-36 w-auto mx-auto mb-4"
                initial={{ 
                  scale: 0, 
                  rotate: -180,
                  filter: "brightness(0)"
                }}
                animate={{ 
                  scale: [0, 1.3, 0.9, 1.1, 1],
                  rotate: [-180, 0, 15, -10, 0],
                  filter: ["brightness(0)", "brightness(2)", "brightness(1)"]
                }}
                transition={{ 
                  duration: 2,
                  ease: "easeOut"
                }}
              />
              
              {/* Company Name */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2">
                  Smash 'A' Spud
                </h1>
                <p className="text-lg text-white/80">
                  Premium Wholesale Food & Beverages
                </p>
              </motion.div>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-80 h-3 bg-white/20 rounded-full overflow-hidden mx-auto mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-white/90 text-lg">
                Loading... {Math.round(loadingProgress)}%
              </p>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
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
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}

            {/* Light Rays */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute w-1 h-20 bg-gradient-to-b from-yellow-300 to-transparent"
                style={{
                  left: `${20 + i * 12}%`,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ 
                  scaleY: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 1 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 