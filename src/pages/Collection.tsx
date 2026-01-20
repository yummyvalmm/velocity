
import React, { useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import { Helmet } from 'react-helmet-async';

const Collection: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // Helper to format slug into title (e.g. "mens-running" -> "Men's Running")
    const formatTitle = (slug: string) => {
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const collectionData = useMemo(() => {
        if (!slug) return { title: 'Collection', products: [] };

        let filtered = products;
        let title = formatTitle(slug);

        switch (slug.toLowerCase()) {
            case 'new-arrivals':
                filtered = products.filter(p => p.id >= 20 || p.label === "New");
                title = "New Arrivals";
                break;
            case 'trending':
                // Show specific trending items or best sellers
                filtered = products.filter(p => p.label === 'Trending' || p.label === 'Best Seller' || p.id <= 8);
                title = "Trending Now";
                break;
            case 'men':
                filtered = products.filter(p => p.type === 'Men');
                break;
            case 'women':
                filtered = products.filter(p => p.type === 'Women');
                break;
            case 'gear':
                filtered = products.filter(p => p.category === 'Gear');
                break;
            case 'sale':
                // Mock sale logic - maybe items with price < $100 or specific IDs
                filtered = products.filter(p => parseInt(p.price.replace('$', '')) < 120);
                break;
            default:
                // Try to match category directly
                filtered = products.filter(p =>
                    p.category.toLowerCase() === slug.toLowerCase() ||
                    p.type.toLowerCase() === slug.toLowerCase()
                );
        }

        return { title, products: filtered };
    }, [slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <div className="pt-24 lg:pt-32 pb-20 min-h-screen bg-white">
            <Helmet>
                <title>{collectionData.title} | Velocity Performance</title>
                <meta name="description" content={`Shop ${collectionData.title} at Velocity Performance.`} />
            </Helmet>

            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-8">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Collection</span>
                    <h1 className="text-4xl font-impact tracking-tight mb-4">
                        {collectionData.title}
                    </h1>
                    <p className="text-gray-500">
                        {collectionData.products.length} products
                    </p>
                </div>

                {collectionData.products.length > 0 ? (
                    <ProductGrid title="" products={collectionData.products} />
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-xl font-bold mb-4">No products found for this collection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collection;
