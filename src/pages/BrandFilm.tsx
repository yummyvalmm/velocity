import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const BrandFilm: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 lg:pt-28 min-h-screen bg-black text-white">
            <Helmet>
                <title>Our Story | Velocity Performance</title>
                <meta name="description" content="Watch the Velocity Performance brand film. Win The Morning." />
            </Helmet>

            <div className="container mx-auto px-4 md:px-8 py-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-[#d1ff00] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Campaign</span>
                    <h1 className="text-5xl md:text-8xl font-impact tracking-tight mb-6">WIN THE MORNING</h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        It's not about the finish line. It's about the first step out the door.
                        See how our athletes redefine their limits every single day.
                    </p>
                </div>

                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gray-900 rounded-sm overflow-hidden shadow-2xl border border-gray-800 group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#d1ff00] group-hover:scale-110 transition-all duration-300">
                            <svg className="w-8 h-8 text-white group-hover:text-black fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1574680096141-98320025c94b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Brand Film Cover"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-gray-800 pt-10">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Relentless Focus</h3>
                        <p className="text-gray-500 text-sm">Designed for those who refuse to settle. Our gear is tested in the harshest conditions.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Advanced Tech</h3>
                        <p className="text-gray-500 text-sm">From Velocity Foam™ to AeroWeave, we engineer speed into every stitch.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Global Community</h3>
                        <p className="text-gray-500 text-sm">Join millions of athletes worldwide who trust Velocity to power their performance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandFilm;
