import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample product data with local images
  const allProducts = [
    {
      id: 1,
      name: "Capri Sun Cherry",
      image: "/img/products/Capri Sun Cherry.jpeg",
      price: 9.99,
      category: "drinks",
      brand: "Capri Sun",
      description: "Refreshing cherry flavored drink"
    },
    {
      id: 2,
      name: "Walker's Classic Crisps",
      image: "/img/products/Walker's Classic Crisps.jpg",
      price: 12.99,
      category: "crisps",
      brand: "Walkers",
      description: "Classic salted potato crisps"
    },
    {
      id: 3,
      name: "Coca Cola Classic",
      image: "/img/products/Coca Cola Classic.webp",
      price: 10.20,
      category: "drinks",
      brand: "Coca Cola",
      description: "Original Coca Cola taste"
    },
    {
      id: 4,
      name: "Cadbury Dairy Milk",
      image: "/img/products/Cadbury Dairy Milk.jpg",
      price: 35.00,
      category: "sweets",
      brand: "Cadbury",
      description: "Creamy milk chocolate"
    },
    {
      id: 5,
      name: "Heinz Baked Beans",
      image: "/img/products/Heinz Baked Beans.webp",
      price: 8.40,
      category: "tins",
      brand: "Heinz",
      description: "Classic baked beans in tomato sauce"
    },
    {
      id: 6,
      name: "Mr. Kipling Cakes",
      image: "/img/products/Mr. Kipling Cakes.jpg",
      price: 7.80,
      category: "cakes",
      brand: "Mr. Kipling",
      description: "Delicious individual cakes"
    },
    {
      id: 7,
      name: "Red Bull Energy",
      image: "/img/products/Red Bull Energy.jpg",
      price: 30.00,
      category: "drinks",
      brand: "Red Bull",
      description: "Energy drink with caffeine"
    },
    {
      id: 8,
      name: "Pringles Original",
      image: "/img/products/Pringles Original.jpeg",
      price: 4.50,
      category: "crisps",
      brand: "Pringles",
      description: "Stackable potato crisps"
    },
    {
      id: 9,
      name: "7Up Free",
      image: "/img/products/7Up Free.webp",
      price: 6.75,
      category: "drinks",
      brand: "7Up",
      description: "Sugar-free lemon lime soda"
    },
    {
      id: 10,
      name: "KitKat Chocolate Bar",
      image: "/img/products/KitKat Chocolate Bar.webp",
      price: 3.20,
      category: "sweets",
      brand: "KitKat",
      description: "Crispy wafer chocolate bar"
    },
    {
      id: 11,
      name: "Lucozade Energy Drink",
      image: "/img/products/Lucozade Energy Drink.jpg",
      price: 5.99,
      category: "drinks",
      brand: "Lucozade",
      description: "Glucose energy drink"
    },
    {
      id: 12,
      name: "Oreo Biscuits",
      image: "/img/products/Oreo Biscuits.webp",
      price: 1.50,
      category: "cakes",
      brand: "Oreo",
      description: "Chocolate sandwich cookies"
    },
    {
      id: 13,
      name: "Pepsi Max",
      image: "/img/products/Pepsi Max.jpeg",
      price: 2.10,
      category: "drinks",
      brand: "Pepsi",
      description: "Zero sugar cola drink"
    },
    {
      id: 14,
      name: "Sprite Lemon-Lime",
      image: "/img/products/Sprite Lemon-Lime.webp",
      price: 1.00,
      category: "drinks",
      brand: "Sprite",
      description: "Refreshing lemon lime soda"
    },
    {
      id: 15,
      name: "Monster Energy Drink",
      image: "/img/products/Monster Energy Drink.webp",
      price: 3.80,
      category: "drinks",
      brand: "Monster",
      description: "High caffeine energy drink"
    },
    {
      id: 16,
      name: "Fanta Orange",
      image: "/img/products/Fanta Orange.jpeg",
      price: 1.65,
      category: "drinks",
      brand: "Fanta",
      description: "Orange flavored soda"
    },
    {
      id: 17,
      name: "Galaxy Smooth Milk",
      image: "/img/products/Galaxy Smooth Milk.webp",
      price: 4.90,
      category: "sweets",
      brand: "Galaxy",
      description: "Smooth milk chocolate bar"
    },
    {
      id: 18,
      name: "Doritos Tangy Cheese",
      image: "/img/products/Doritos Tangy Cheese.jpeg",
      price: 2.75,
      category: "crisps",
      brand: "Doritos",
      description: "Tangy cheese flavored tortilla chips"
    },
    {
      id: 19,
      name: "Maltesers",
      image: "/img/products/Maltesers.jpeg",
      price: 2.20,
      category: "sweets",
      brand: "Maltesers",
      description: "Malted milk chocolate balls"
    },
    {
      id: 20,
      name: "McVitie's Digestives",
      image: "/img/products/McVitie's Digestives.jpg",
      price: 1.80,
      category: "cakes",
      brand: "McVitie's",
      description: "Wheat biscuits"
    },
    {
      id: 21,
      name: "Cheetos Crunchy",
      image: "/img/products/Cheetos Crunchy.jpeg",
      price: 3.10,
      category: "crisps",
      brand: "Cheetos",
      description: "Crunchy cheese puffs"
    },
    {
      id: 22,
      name: "Walkers Cheese & Onion",
      image: "/img/products/Walkers Cheese & Onion.jpg",
      price: 2.99,
      category: "crisps",
      brand: "Walkers",
      description: "Cheese and onion flavored crisps"
    },
    {
      id: 23,
      name: "Kinder Bueno",
      image: "/img/products/Kinder Bueno.jpeg",
      price: 5.50,
      category: "sweets",
      brand: "Kinder",
      description: "Hazelnut cream chocolate bar"
    },
    {
      id: 24,
      name: "Lindt Lindor Truffles",
      image: "/img/products/Lindt Lindor Truffles.webp",
      price: 3.90,
      category: "sweets",
      brand: "Lindt",
      description: "Premium chocolate truffles"
    },
    {
      id: 25,
      name: "Tropicana Orange Juice",
      image: "/img/products/Tropicana Orange Juice.jpg",
      price: 2.30,
      category: "drinks",
      brand: "Tropicana",
      description: "Fresh orange juice"
    },
    {
      id: 26,
      name: "Ribena Blackcurrant",
      image: "/img/products/Ribena Blackcurrant.jpeg",
      price: 1.20,
      category: "drinks",
      brand: "Ribena",
      description: "Blackcurrant fruit drink"
    },
    {
      id: 27,
      name: "Robinsons Fruit Shoot",
      image: "/img/products/Robinsons Fruit Shoot.webp",
      price: 0.85,
      category: "drinks",
      brand: "Robinsons",
      description: "Kids fruit drink"
    },
    {
      id: 28,
      name: "Nestlé Pure Life Water",
      image: "/img/products/Nestlé Pure Life Water.jpg",
      price: 2.00,
      category: "drinks",
      brand: "Nestlé",
      description: "Pure bottled water"
    },
    {
      id: 29,
      name: "Volvic Mineral Water",
      image: "/img/products/Volvic Mineral Water.webp",
      price: 4.00,
      category: "drinks",
      brand: "Volvic",
      description: "Natural mineral water"
    },
    {
      id: 30,
      name: "Barbican Malt Beverage",
      image: "/img/products/Barbican Malt Beverage.webp",
      price: 3.50,
      category: "drinks",
      brand: "Barbican",
      description: "Non-alcoholic malt beverage"
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
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${currentPage === index + 1
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