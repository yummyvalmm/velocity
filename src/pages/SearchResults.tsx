
import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import { Helmet } from 'react-helmet-async';

const SearchResults: React.FC = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('q') || '';

    const searchResults = useMemo(() => {
        if (!query) return [];

        const lowerQuery = query.toLowerCase();

        return products.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            product.type.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    return (
        <div className="pt-24 lg:pt-32 pb-20 min-h-screen bg-white">
            <Helmet>
                <title>Search Results for "{query}" | Velocity Performance</title>
            </Helmet>

            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-3xl font-impact tracking-tight mb-4">
                    Search Results
                </h1>
                <p className="text-gray-500 mb-12">
                    {searchResults.length} {searchResults.length === 1 ? 'item' : 'items'} found for "{query}"
                </p>

                {searchResults.length > 0 ? (
                    <ProductGrid title="" products={searchResults} />
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-xl font-bold mb-4">No matches found for "{query}"</p>
                        <p className="text-gray-500 mb-8">Try checking your spelling or using a different keyword.</p>

                        <div className="max-w-md mx-auto">
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Popular Searches</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Running', 'Training', 'Air Max', 'Hoodie', 'Socks'].map(term => (
                                    <Link key={term} to={`/search?q=${term}`} className="bg-gray-100 hover:bg-black hover:text-white px-4 py-2 rounded-full text-sm transition-colors">
                                        {term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
