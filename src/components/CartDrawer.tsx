import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    // Close on route change
    useEffect(() => {
        setIsCartOpen(false);
    }, [navigate, setIsCartOpen]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-xl font-impact tracking-tight uppercase">Your Bag ({items.length})</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <p className="text-gray-500 mb-6">Your bag is empty.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-gray-800"
                            >
                                Start Shopping
                            </button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-sm flex-shrink-0">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <Link
                                            to={`/product/${item.product.id}`}
                                            className="font-bold text-sm hover:underline line-clamp-2"
                                            onClick={() => setIsCartOpen(false)}
                                        >
                                            {item.product.name}
                                        </Link>
                                        <span className="font-bold text-sm ml-2">{item.product.price}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs mb-2">{item.product.category} • Size: {item.size}</p>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border rounded-full px-2 py-0.5">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-2 text-sm text-gray-500 hover:text-black"
                                            >-</button>
                                            <span className="px-1 text-xs font-medium w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-2 text-sm text-gray-500 hover:text-black"
                                            >+</button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs underline text-gray-400 hover:text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex justify-between mb-4 font-bold">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
                        <div className="space-y-3">
                            <Link
                                to="/checkout"
                                className="block w-full bg-black text-white text-center py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                onClick={() => setIsCartOpen(false)}
                            >
                                Checkout
                            </Link>
                            <Link
                                to="/cart"
                                className="block w-full border border-gray-300 text-center py-3 rounded-full font-bold uppercase tracking-wider hover:border-black transition-colors text-sm"
                                onClick={() => setIsCartOpen(false)}
                            >
                                View Cart
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
