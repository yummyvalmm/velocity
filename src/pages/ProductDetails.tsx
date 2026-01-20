
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import SizeGuideModal from '../components/SizeGuideModal';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

    const product = products.find(p => p.id === Number(id));

    // Determine sizes based on category
    const sizes = product?.category === 'Gear'
        ? ['One Size']
        : ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) return;
        addToCart(product, selectedSize);
        toast.success(`Added ${product.name} to bag`);
    };

    return (
        <div className="pt-20 lg:pt-28 min-h-screen bg-white">
            <Helmet>
                <title>{product.name} | Velocity Performance</title>
                <meta name="description" content={`Shop ${product.name} - ${product.category}. ${product.type}. Price: ${product.price}.`} />
            </Helmet>
            <div className="container mx-auto px-4 lg:px-8 py-10">
                <button onClick={() => navigate(-1)} className="text-sm text-gray-500 hover:text-black mb-8 flex items-center gap-2">
                    ← Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Images */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Simple gallery thumbnails mock */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-100 rounded-sm cursor-pointer hover:opacity-80">
                                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-impact uppercase tracking-tight mb-2">{product.name}</h1>
                        <p className="text-gray-500 font-medium mb-6">{product.category} • {product.type}</p>
                        <p className="text-2xl font-bold mb-4">{product.price}</p>

                        {/* Reviews Mock */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex text-black">
                                {[...Array(4)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                ))}
                                <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            </div>
                            <span className="text-sm font-medium underline cursor-pointer hover:text-gray-600">48 Reviews</span>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-sm">Select Size</h3>
                                <button
                                    onClick={() => setIsSizeGuideOpen(true)}
                                    className="text-sm text-gray-500 underline hover:text-black transition-colors"
                                >
                                    Size Guide
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-3 border rounded-md text-sm font-medium transition-all ${selectedSize === size
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-300 hover:border-gray-800'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {!selectedSize && <p className="text-red-500 text-xs mt-2">* Please select a size</p>}
                        </div>

                        <div className="space-y-4 mb-10">
                            <button
                                onClick={handleAddToCart}
                                disabled={!selectedSize}
                                className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Add to Cart
                            </button>
                            <button className="w-full border border-gray-300 py-4 rounded-full font-bold uppercase tracking-wider hover:border-black transition-colors">
                                Favorite
                            </button>
                        </div>

                        {/* Reliable Shopping Info */}
                        <div className="space-y-6 pt-6 border-t border-gray-100">
                            <div className="flex gap-4 items-start">
                                <span className="text-xl">🚚</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Free Delivery & Returns</h4>
                                    <p className="text-sm text-gray-500">Free standard delivery on orders over $100. Returns are free for 30 days.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="text-xl">✨</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Authenticity Guaranteed</h4>
                                    <p className="text-sm text-gray-500">We guarantee that every product we sell is 100% authentic and top quality.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="text-xl">📏</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Fit: Runs True to Size</h4>
                                    <p className="text-sm text-gray-500">Ordered your normal size? perfect. Between sizes? We recommend sizing up.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 prose prose-sm">
                            <p>Designed for {product.category.toLowerCase()} excellence. The {product.name} delivers superior performance with cutting-edge technology and premium materials. Validated by elite athletes.</p>
                            <ul className="list-disc pl-5 mt-4 space-y-1 text-gray-600">
                                <li>Breathable upper mesh</li>
                                <li>Responsive cushioning system</li>
                                <li>Durable traction outsole</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* You Might Also Like */}
                <div className="mt-20 border-t border-gray-100 pt-16">
                    <h2 className="text-2xl font-impact uppercase tracking-tight mb-8">You Might Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {products
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 4)
                            .map(relatedProduct => (
                                <div key={relatedProduct.id} className="group cursor-pointer" onClick={() => navigate(`/product/${relatedProduct.id}`)}>
                                    <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden mb-3 relative">
                                        <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        {relatedProduct.label === 'New' && (
                                            <span className="absolute top-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                                                New
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-bold text-sm leading-tight group-hover:underline decoration-1 underline-offset-4">{relatedProduct.name}</h3>
                                    <p className="text-gray-500 text-xs mt-1">{relatedProduct.category}</p>
                                    <p className="font-mono text-sm font-bold mt-2">{relatedProduct.price}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
        </div >
    );
};

export default ProductDetails;
