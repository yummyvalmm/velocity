
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="pt-32 pb-20 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-impact tracking-tight mb-4">Your Bag is Empty</h2>
                <p className="text-gray-500 mb-8">Once you add items to your bag, they will appear here.</p>
                <Link to="/" className="bg-black text-white px-8 py-3 rounded-full font-bold">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 lg:pt-32 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-3xl font-impact tracking-tight mb-8">Your Bag</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="lg:w-2/3 space-y-8">
                        {items.map((item) => (
                            <div key={item.id} className="flex gap-6 border-b border-gray-100 pb-8">
                                <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg">{item.product.name}</h3>
                                        <p className="font-bold">{item.product.price}</p>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-1">{item.product.category}</p>
                                    <p className="text-gray-500 text-sm mb-4">Size: {item.size}</p>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center border rounded-full px-3 py-1">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-xl leading-none">-</button>
                                            <span className="px-2 text-sm font-medium">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-xl leading-none">+</button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm underline text-gray-500 hover:text-black"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm sticky top-32">
                            <h2 className="text-xl font-impact tracking-tight mb-6">Order Summary</h2>

                            <div className="flex justify-between mb-4 text-sm">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="font-medium font-mono">${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-4 text-sm">
                                <span className="text-gray-500">Shipping</span>
                                <span className="font-medium text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between mb-6 text-sm">
                                <span className="text-gray-500">Tax</span>
                                <span className="font-medium text-gray-500">Calculated at checkout</span>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-8">
                                <label className="text-xs font-bold uppercase tracking-wider mb-2 block text-gray-400">Promo Code</label>
                                <div className="flex bg-white border border-gray-300 rounded-full overflow-hidden p-1 focus-within:border-black transition-colors">
                                    <input type="text" placeholder="Enter code" className="flex-1 px-4 py-2 text-sm outline-none uppercase placeholder-gray-400" />
                                    <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">Apply</button>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6 flex justify-between text-lg font-bold mb-8">
                                <span>Total</span>
                                <span className="font-mono">${cartTotal.toFixed(2)}</span>
                            </div>

                            <Link to="/checkout" className="block w-full text-center bg-black text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                                Checkout
                            </Link>

                            <div className="mt-6 flex flex-col gap-2 text-xs text-gray-400 text-center">
                                <p>🔒 Secure Checkout</p>
                                <p>Free Returns within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
