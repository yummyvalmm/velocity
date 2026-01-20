
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Search Preview Logic
  const filteredProducts = searchQuery.length > 1
    ? products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 4)
    : [];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Brand Logo */}
        <div className={`flex items-center transition-opacity duration-200 ${isSearchOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
          <Link to="/" className="font-impact text-2xl tracking-tighter flex items-center gap-1">
            <div className="w-6 h-6 bg-black transform -skew-x-12"></div>
            VELOCITY
          </Link>
        </div>

        {/* Search Overlay/Input */}
        {isSearchOpen ? (
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-6 md:px-0 md:relative md:transform-none md:top-auto md:w-1/3 mx-auto">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-100 border-none rounded-full py-2 px-4 pl-10 focus:ring-2 focus:ring-black outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => !searchQuery && setIsSearchOpen(false)} // Optional: close on blur if empty
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>

            {/* Search Preview Dropdown */}
            {searchQuery.length > 1 && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-xl mt-2 rounded-sm overflow-hidden z-[60] border border-gray-100">
                {filteredProducts.length > 0 ? (
                  <>
                    <div className="p-3 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Products
                    </div>
                    <div>
                      {filteredProducts.map(product => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-gray-900 leading-tight">{product.name}</h4>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                          <div className="ml-auto font-mono text-xs font-bold">
                            {product.price}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <button
                      onClick={(e) => handleSearchSubmit(e as any)}
                      className="w-full text-center py-3 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors border-t border-gray-100"
                    >
                      View All Results
                    </button>
                  </>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500 text-sm">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}

            {/* Trending Suggestions (When query is empty) */}
            {isSearchOpen && searchQuery.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-xl mt-2 rounded-sm overflow-hidden z-[60] border border-gray-100 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4">Trending Now</h3>
                <div className="flex flex-wrap gap-2">
                  {['Running Shoes', 'Training Gear', 'Hoodies', 'Socks', 'New Arrivals'].map(term => (
                    <button
                      key={term}
                      onMouseDown={(e) => {
                        e.preventDefault(); // Prevent input blur
                        setSearchQuery(term);
                        navigate(`/search?q=${encodeURIComponent(term)}`);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="bg-gray-100 hover:bg-black hover:text-white px-4 py-2 rounded-full text-sm transition-colors text-gray-600 font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Main Links - Hidden when search is open on mobile */
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-wider">
            {['Men', 'Women', 'Gear', 'Sale'].map((item) => (
              <Link
                key={item}
                to={`/collections/${item.toLowerCase()}`}
                className="group relative py-1"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        )}

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          {!isSearchOpen && (
            <button onClick={() => setIsSearchOpen(true)} className="hover:text-gray-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
          <Link to="/cart" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#d1ff00] text-black text-[10px] font-bold px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
