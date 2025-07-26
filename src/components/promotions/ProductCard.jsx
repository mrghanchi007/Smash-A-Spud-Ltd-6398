import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiZap, FiPercent } = FiIcons;

const ProductCard = ({ product, index }) => {
  const getTagIcon = (tag) => {
    switch (tag) {
      case 'new': return FiStar;
      case 'hot': return FiZap;
      case 'special': return FiPercent;
      default: return FiStar;
    }
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case 'new': return 'bg-green-500';
      case 'hot': return 'bg-red-500';
      case 'special': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  const getTagLabel = (tag) => {
    switch (tag) {
      case 'new': return 'New';
      case 'hot': return 'Hot';
      case 'special': return 'Special Offer';
      default: return tag;
    }
  };

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
        />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.tags.map((tag, tagIndex) => (
            <motion.div
              key={tag}
              className={`${getTagColor(tag)} text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3 + tagIndex * 0.1, type: "spring" }}
            >
              <SafeIcon icon={getTagIcon(tag)} className="text-xs" />
              <span>{getTagLabel(tag)}</span>
            </motion.div>
          ))}
        </div>

        {/* POR Badge */}
        <div className="absolute top-3 right-3">
          <motion.div
            className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            {product.por}%
          </motion.div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">RRP:</span>
            <span className="text-sm text-gray-500 line-through">£{product.rrp.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">COST:</span>
            <span className="text-sm font-semibold text-gray-900">£{product.cost.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">PACK:</span>
            <span className="text-sm text-gray-700">{product.pack}</span>
          </div>
        </div>

        {/* Final Price */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Final Price:</span>
            <motion.span
              className="text-2xl font-bold text-primary-600"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              £{product.finalPrice.toFixed(2)}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;