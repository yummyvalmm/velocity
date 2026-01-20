
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

const Checkout: React.FC = () => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: ''
    });

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-4 text-center">
                <p>Your cart is empty. Please add items before checking out.</p>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        clearCart();
        navigate('/order-success');
        toast.success("Order placed successfully!");
    };

    return (
        <div className="pt-24 lg:pt-32 pb-20 min-h-screen bg-white">
            <Helmet>
                <title>Checkout | Velocity Performance</title>
            </Helmet>
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-3xl font-impact tracking-tight mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div>
                        <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    required
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                />
                                <input
                                    required
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                />
                            </div>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                            />
                            <input
                                required
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    required
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                />
                                <input
                                    required
                                    name="zip"
                                    placeholder="ZIP Code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black"
                                />
                            </div>

                            <div className="pt-8">
                                <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                                <div className="space-y-4 p-4 border rounded-md bg-gray-50">
                                    <div className="flex gap-4 mb-4">
                                        <div className="w-10 h-6 bg-blue-600 rounded"></div>
                                        <div className="w-10 h-6 bg-red-500 rounded"></div>
                                        <div className="w-10 h-6 bg-yellow-400 rounded"></div>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black bg-white"
                                        maxLength={19}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black bg-white"
                                            maxLength={5}
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVC"
                                            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-black bg-white"
                                            maxLength={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors mt-8 disabled:opacity-70 disabled:cursor-wait"
                            >
                                {isProcessing ? 'Processing Order...' : `Pay $${cartTotal.toFixed(2)}`}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-8 rounded-lg h-fit">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span>{item.product.name} (x{item.quantity})</span>
                                    <span>{item.product.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
