
import React from 'react';
import Hero from '../components/Hero';
import FeaturedStory from '../components/FeaturedStory';
import ProductGrid from '../components/ProductGrid';

import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
    return (
        <main className="flex-grow">
            <Helmet>
                <title>Velocity Performance | Run, Train, Live</title>
                <meta name="description" content="Shop the latest high-performance athletic gear, running shoes, and lifestyle apparel at Velocity Performance." />
            </Helmet>
            <Hero />
            <React.Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                <div className="container mx-auto px-4 md:px-8">
                    <ProductGrid title="Trending Now" limit={4} seeAllLink="/collections/trending" />

                    <FeaturedStory />
                    <ProductGrid title="Men's Running" category="Running" limit={4} seeAllLink="/collections/running" />
                    <ProductGrid title="Basketball Heat" category="Basketball" limit={4} seeAllLink="/collections/basketball" />
                    <ProductGrid title="Lifestyle & Culture" category="Lifestyle" limit={4} seeAllLink="/collections/lifestyle" />
                    <ProductGrid title="Essential Gear" category="gear" limit={4} seeAllLink="/collections/gear" />
                </div>
            </React.Suspense>
        </main>
    );
};

export default Home;
