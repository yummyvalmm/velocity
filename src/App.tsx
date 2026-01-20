import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/Toaster';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import SearchResults from './pages/SearchResults';
import Collection from './pages/Collection';
import BrandFilm from './pages/BrandFilm';
import Innovation from './pages/Innovation';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Toaster />
          <div className="min-h-screen flex flex-col bg-white">
            <CartDrawer />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/collections/:slug" element={<Collection />} />
              <Route path="/brand-story" element={<BrandFilm />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
};

export default App;
