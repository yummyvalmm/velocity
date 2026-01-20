import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

interface ProductGridProps {
  title: string;
  category?: string; // If 'gear', matches category="Gear". Else can match category string.
  limit?: number;
  products?: typeof products;
  seeAllLink?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, category, limit, products: productsOverride, seeAllLink }) => {
  const displayedProducts = useMemo(() => {
    let filtered = productsOverride || products;

    if (category && !productsOverride) {
      if (category === 'gear') {
        filtered = products.filter(p => p.category === 'Gear');
      } else {
        // loose matching or exact match
        filtered = products.filter(p =>
          p.category.toLowerCase().includes(category.toLowerCase()) ||
          p.type.toLowerCase().includes(category.toLowerCase())
        );
      }
    }

    // Sort by newness or random shuffle could go here, for now just slice
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit, productsOverride]);

  if (displayedProducts.length === 0) return null;

  return (
    <section className="py-20">
      <div className="flex justify-between items-end mb-10 px-2">
        <h2 className="text-2xl font-impact tracking-tight">{title}</h2>
        {seeAllLink && (
          <Link to={seeAllLink} className="text-sm font-bold underline underline-offset-4 hover:text-gray-600">Shop All</Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12">
        {displayedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.id}`} className="block">
              <div className="aspect-square bg-gray-100 overflow-hidden mb-4 relative rounded-sm">
                {product.label && (
                  <span className="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm">
                    {product.label}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Hover Action Button */}
                <button className="absolute bottom-4 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <div className="px-1 group-hover:translate-x-1 transition-transform duration-300">
                <h3 className="font-bold text-sm text-gray-900 leading-tight">{product.name}</h3>
                <p className="text-gray-500 text-xs mb-1 mt-1">{product.category} • {product.type}</p>
                <p className="font-bold text-sm">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
