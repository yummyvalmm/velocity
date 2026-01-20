import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Innovation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 lg:pt-28 min-h-screen bg-white text-black">
            <Helmet>
                <title>Innovation | Velocity Performance</title>
                <meta name="description" content="Explore the technology behind Velocity Performance gear." />
            </Helmet>

            {/* Header */}
            <div className="bg-black text-white py-20 px-4 md:px-8">
                <div className="container mx-auto">
                    <span className="text-[#d1ff00] font-bold uppercase tracking-widest text-xs mb-4 block">Velocity Lab</span>
                    <h1 className="text-5xl md:text-8xl font-impact tracking-tight mb-6">ENGINEERED<br />FOR SPEED</h1>
                </div>
            </div>

            {/* Velocity Foam Section */}
            <div className="container mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Velocity Foam Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-impact tracking-tight mb-6">VELOCITY FOAM™</h2>
                        <p className="text-xl font-bold mb-4">Gravity-defying energy return.</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our proprietary foam compound is 40% lighter than standard EVA and delivers 15% more energy return with every stride.
                            The molecular structure allows for maximum compression while snapping back instantly, propelling you forward.
                        </p>
                        <ul className="space-y-2 font-bold uppercase text-sm tracking-wide">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#d1ff00] rounded-full"></div> Ultra-Lightweight</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#d1ff00] rounded-full"></div> 85% Energy Return</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#d1ff00] rounded-full"></div> Impact Protection</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* AeroWeave Section */}
            <div className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-impact tracking-tight mb-6">AEROWEAVE™</h2>
                            <p className="text-xl font-bold mb-4">Breathability reimagined.</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A single-layer engineered mesh that mimics the strength of carbon fiber while remaining virtually weightless.
                                Laser-cut ventilation zones target high-heat areas, keeping your feet cool mile after mile.
                            </p>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                                Shop Innovation
                            </button>
                        </div>
                        <div>
                            <div className="aspect-video bg-white rounded-sm overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="AeroWeave Texture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Innovation;
