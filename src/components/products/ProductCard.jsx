import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback Image */}
        <div 
          className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center"
          style={{ display: 'none' }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🛍️</div>
            <div className="text-sm text-gray-600 font-medium">{product.name}</div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">Brand:</span>
          <span className="text-sm font-medium text-gray-700">{product.brand}</span>
        </div>

        {/* Price */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Price:</span>
            <motion.span
              className="text-2xl font-bold text-primary-600"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              £{product.price.toFixed(2)}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;