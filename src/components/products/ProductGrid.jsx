import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample product data with proper images
  const allProducts = [
    {
      id: 1,
      name: "Capri Sun Cherry",
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop&crop=center",
      price: 9.99,
      category: "drinks",
      brand: "Capri Sun",
      description: "Refreshing cherry flavored drink"
    },
    {
      id: 2,
      name: "Walker's Classic Crisps",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop&crop=center",
      price: 12.99,
      category: "crisps",
      brand: "Walkers",
      description: "Classic salted potato crisps"
    },
    {
      id: 3,
      name: "Coca Cola Classic",
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop&crop=center",
      price: 10.20,
      category: "drinks",
      brand: "Coca Cola",
      description: "Original Coca Cola taste"
    },
    {
      id: 4,
      name: "Cadbury Dairy Milk",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop&crop=center",
      price: 35.00,
      category: "sweets",
      brand: "Cadbury",
      description: "Creamy milk chocolate"
    },
    {
      id: 5,
      name: "Heinz Baked Beans",
      image: "https://jollyposhfoods.com/cdn/shop/files/Beans.png",
      price: 8.40,
      category: "tins",
      brand: "Heinz",
      description: "Classic baked beans in tomato sauce"
    },
    {
      id: 6,
      name: "Mr. Kipling Cakes",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
      price: 7.80,
      category: "cakes",
      brand: "Mr. Kipling",
      description: "Delicious individual cakes"
    },
    {
      id: 7,
      name: "Red Bull Energy",
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=400&fit=crop&crop=center",
      price: 30.00,
      category: "drinks",
      brand: "Red Bull",
      description: "Energy drink with caffeine"
    },
    {
      id: 8,
      name: "Pringles Original",
      image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=400&fit=crop&crop=center",
      price: 18.00,
      category: "crisps",
      brand: "Pringles",
      description: "Stackable potato crisps"
    },
    {
      id: 9,
      name: "Nestle Kit Kat",
      image: "https://flowerbouquet.pk/cdn/shop/files/Nestle_KitKat-4_Finger.png",
      price: 22.50,
      category: "sweets",
      brand: "Nestle",
      description: "Crispy wafer chocolate bar"
    },
    {
      id: 10,
      name: "Lucozade Energy",
      image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400&h=400&fit=crop&crop=center",
      price: 15.99,
      category: "drinks",
      brand: "Lucozade",
      description: "Glucose energy drink"
    },
    {
      id: 11,
      name: "Doritos Nacho Cheese",
      image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=400&fit=crop&crop=center",
      price: 16.50,
      category: "crisps",
      brand: "Doritos",
      description: "Nacho cheese flavored corn chips"
    },
    {
      id: 12,
      name: "Haribo Gummy Bears",
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop&crop=center",
      price: 12.75,
      category: "sweets",
      brand: "Haribo",
      description: "Classic gummy bear sweets"
    }
  ];

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesBrand = filters.brand === 'all' || product.brand.toLowerCase().includes(filters.brand.toLowerCase());
      const matchesSearch = filters.search === '' || 
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div>
      {/* Results Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900">
          {filteredProducts.length} Products Found
        </h2>
        <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
          <option>Sort by: Best Match</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {currentProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index}
          />
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          className="flex justify-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === index + 1
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGrid;