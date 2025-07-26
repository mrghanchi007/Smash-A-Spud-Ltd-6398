import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiFilter } = FiIcons;

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'crisps', label: 'Crisps & Snacks' },
    { value: 'drinks', label: 'Drinks & Beverages' },
    { value: 'dairy', label: 'Dairy Products' },
    { value: 'tins', label: 'Tinned Goods' },
    { value: 'cakes', label: 'Cakes & Desserts' },
    { value: 'sweets', label: 'Sweets & Confectionery' }
  ];

  const porRanges = [
    { value: 'all', label: 'All POR %' },
    { value: 'low', label: 'Under 30%' },
    { value: 'medium', label: '30% - 35%' },
    { value: 'high', label: 'Over 35%' }
  ];

  const brands = [
    'All Brands', 'Coca Cola', 'Walkers', 'Cadbury', 'Heinz', 
    'Pringles', 'Red Bull', 'Capri Sun', 'Mr. Kipling'
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-2 mb-6">
        <SafeIcon icon={FiFilter} className="text-primary-600" />
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Products
        </label>
        <div className="relative">
          <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* POR Range Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Profit Margin (POR %)
        </label>
        <select
          value={filters.porRange}
          onChange={(e) => setFilters(prev => ({ ...prev, porRange: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {porRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand
        </label>
        <select
          value={filters.brand}
          onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          {brands.map(brand => (
            <option key={brand} value={brand === 'All Brands' ? 'all' : brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters */}
      <motion.button
        onClick={() => setFilters({ category: 'all', porRange: 'all', brand: 'all', search: '' })}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Clear All Filters
      </motion.button>
    </motion.div>
  );
};

export default FilterSidebar;