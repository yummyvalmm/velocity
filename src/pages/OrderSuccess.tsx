
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderSuccess: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
            <Helmet>
                <title>Order Confirmed | Velocity Performance</title>
            </Helmet>
            <div className="w-20 h-20 bg-[#d1ff00] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h1 className="text-4xl font-impact tracking-tight mb-4">Order Confirmed</h1>
            <p className="text-gray-500 mb-8 max-w-md">
                Thank you for your purchase. We have received your order and will send you a confirmation email shortly.
            </p>
            <Link to="/" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-all">
                Continue Shopping
            </Link>
        </div>
    );
};

export default OrderSuccess;
