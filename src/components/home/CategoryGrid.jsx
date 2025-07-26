import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Crisps & Snacks",
      emoji: "🥔",
      color: "from-yellow-400 to-orange-500",
      description: "Premium crisps and snack foods"
    },
    {
      id: 2,
      name: "Drinks & Beverages",
      emoji: "🥤",
      color: "from-blue-400 to-cyan-500",
      description: "Soft drinks, juices, and energy drinks"
    },
    {
      id: 3,
      name: "Dairy Products",
      emoji: "🧀",
      color: "from-green-400 to-emerald-500",
      description: "Fresh dairy and cheese products"
    },
    {
      id: 4,
      name: "Tinned Goods",
      emoji: "🥫",
      color: "from-red-400 to-pink-500",
      description: "Canned foods and preserves"
    },
    {
      id: 5,
      name: "Cakes & Desserts",
      emoji: "🍰",
      color: "from-purple-400 to-indigo-500",
      description: "Sweet treats and baked goods"
    },
    {
      id: 6,
      name: "Sweets & Confectionery",
      emoji: "🍬",
      color: "from-pink-400 to-rose-500",
      description: "Candies and confectionery items"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of wholesale products across multiple categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Link to="/products" className="block">
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-4 text-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0] 
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5 
                      }}
                    >
                      {category.emoji}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2 text-center group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-white/90 text-sm text-center">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;