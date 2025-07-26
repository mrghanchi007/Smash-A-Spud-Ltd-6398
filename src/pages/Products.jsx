import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductGrid from '../components/products/ProductGrid';
import FilterSidebar from '../components/products/FilterSidebar';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter } = FiIcons;

const Products = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive range of wholesale food and beverage products
            </p>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg"
            >
              <SafeIcon icon={FiFilter} />
              <span>Filters</span>
            </button>
          </div>

          {/* Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-1/4`}>
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <ProductGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;