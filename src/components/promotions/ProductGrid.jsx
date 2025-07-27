import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample product data with local images and promotion details
  const allProducts = [
    {
      id: 1,
      name: "Capri Sun Cherry",
      image: "/img/products/Capri Sun Cherry.jpeg",
      rrp: 1.19,
      cost: 0.79,
      pack: "15x330ml",
      finalPrice: 9.99,
      por: 32.8,
      category: "drinks",
      brand: "Capri Sun",
      tags: ["new", "hot"]
    },
    {
      id: 2,
      name: "Walker's Classic Crisps",
      image: "/img/products/Walker's Classic Crisps.jpg",
      rrp: 0.89,
      cost: 0.55,
      pack: "24x25g",
      finalPrice: 12.99,
      por: 38.2,
      category: "crisps",
      brand: "Walkers",
      tags: ["special"]
    },
    {
      id: 3,
      name: "Coca Cola Classic",
      image: "/img/products/Coca Cola Classic.webp",
      rrp: 1.25,
      cost: 0.85,
      pack: "12x330ml",
      finalPrice: 10.20,
      por: 32.0,
      category: "drinks",
      brand: "Coca Cola",
      tags: ["hot"]
    },
    {
      id: 4,
      name: "Cadbury Dairy Milk",
      image: "/img/products/Cadbury Dairy Milk.jpg",
      rrp: 2.50,
      cost: 1.75,
      pack: "20x45g",
      finalPrice: 35.00,
      por: 30.0,
      category: "sweets",
      brand: "Cadbury",
      tags: ["new"]
    },
    {
      id: 5,
      name: "Heinz Baked Beans",
      image: "/img/products/Heinz Baked Beans.webp",
      rrp: 1.10,
      cost: 0.70,
      pack: "12x415g",
      finalPrice: 8.40,
      por: 36.4,
      category: "tins",
      brand: "Heinz",
      tags: ["special"]
    },
    {
      id: 6,
      name: "Mr. Kipling Cakes",
      image: "/img/products/Mr. Kipling Cakes.jpg",
      rrp: 2.00,
      cost: 1.30,
      pack: "6x6 pack",
      finalPrice: 7.80,
      por: 35.0,
      category: "cakes",
      brand: "Mr. Kipling",
      tags: ["hot"]
    },
    {
      id: 7,
      name: "Red Bull Energy",
      image: "/img/products/Red Bull Energy.jpg",
      rrp: 1.85,
      cost: 1.25,
      pack: "24x250ml",
      finalPrice: 30.00,
      por: 32.4,
      category: "drinks",
      brand: "Red Bull",
      tags: ["new", "hot"]
    },
    {
      id: 8,
      name: "Pringles Original",
      image: "/img/products/Pringles Original.jpeg",
      rrp: 2.25,
      cost: 1.50,
      pack: "12x165g",
      finalPrice: 18.00,
      por: 33.3,
      category: "crisps",
      brand: "Pringles",
      tags: ["special"]
    },
    {
      id: 9,
      name: "Pepsi Max",
      image: "/img/products/Pepsi Max.jpeg",
      rrp: 1.20,
      cost: 0.80,
      pack: "12x330ml",
      finalPrice: 9.60,
      por: 33.3,
      category: "drinks",
      brand: "Pepsi",
      tags: ["hot"]
    },
    {
      id: 10,
      name: "Galaxy Smooth Milk",
      image: "/img/products/Galaxy Smooth Milk.webp",
      rrp: 2.20,
      cost: 1.45,
      pack: "24x42g",
      finalPrice: 34.80,
      por: 34.1,
      category: "sweets",
      brand: "Galaxy",
      tags: ["new"]
    },
    {
      id: 11,
      name: "Doritos Tangy Cheese",
      image: "/img/products/Doritos Tangy Cheese.jpeg",
      rrp: 1.89,
      cost: 1.20,
      pack: "12x150g",
      finalPrice: 14.40,
      por: 36.5,
      category: "crisps",
      brand: "Doritos",
      tags: ["special"]
    },
    {
      id: 12,
      name: "KitKat Chocolate Bar",
      image: "/img/products/KitKat Chocolate Bar.webp",
      rrp: 1.95,
      cost: 1.25,
      pack: "24x41.5g",
      finalPrice: 30.00,
      por: 35.9,
      category: "sweets",
      brand: "KitKat",
      tags: ["hot"]
    },
    {
      id: 13,
      name: "Monster Energy Drink",
      image: "/img/products/Monster Energy Drink.webp",
      rrp: 2.10,
      cost: 1.40,
      pack: "12x500ml",
      finalPrice: 16.80,
      por: 33.3,
      category: "drinks",
      brand: "Monster",
      tags: ["new", "hot"]
    },
    {
      id: 14,
      name: "McVitie's Digestives",
      image: "/img/products/McVitie's Digestives.jpg",
      rrp: 1.75,
      cost: 1.10,
      pack: "12x400g",
      finalPrice: 13.20,
      por: 37.1,
      category: "cakes",
      brand: "McVitie's",
      tags: ["special"]
    },
    {
      id: 15,
      name: "Maltesers",
      image: "/img/products/Maltesers.jpeg",
      rrp: 2.30,
      cost: 1.50,
      pack: "20x37g",
      finalPrice: 30.00,
      por: 34.8,
      category: "sweets",
      brand: "Maltesers",
      tags: ["hot"]
    },
    {
      id: 16,
      name: "Lucozade Energy Drink",
      image: "/img/products/Lucozade Energy Drink.jpg",
      rrp: 1.65,
      cost: 1.05,
      pack: "12x380ml",
      finalPrice: 12.60,
      por: 36.4,
      category: "drinks",
      brand: "Lucozade",
      tags: ["new", "special"]
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
      
      let matchesPorRange = true;
      if (filters.porRange !== 'all') {
        const por = product.por;
        switch (filters.porRange) {
          case 'low':
            matchesPorRange = por < 30;
            break;
          case 'medium':
            matchesPorRange = por >= 30 && por < 35;
            break;
          case 'high':
            matchesPorRange = por >= 35;
            break;
        }
      }

      return matchesCategory && matchesBrand && matchesSearch && matchesPorRange;
    });
  }, [filters]);

  // Handle page change with scroll to top
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
          <option>POR: Highest First</option>
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
                onClick={() => handlePageChange(index + 1)}
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