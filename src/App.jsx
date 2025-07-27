import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Promotions from './pages/Promotions';
import Products from './pages/Products';
import Contact from './pages/Contact';
import TopBar from './components/TopBar';
import LoadingScreen from './components/LoadingScreen';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          
          {!isLoading && (
            <>
              <ScrollToTop />
              <TopBar />
              <Header />
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/promotions" element={<Promotions />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </motion.main>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;