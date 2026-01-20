
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found | Velocity Performance</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-9xl font-impact text-gray-200">404</h1>
                <h2 className="text-3xl font-bold mb-4 -mt-12 relative z-10">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-all">
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
