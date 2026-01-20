
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden bg-gray-100">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Athlete running"
          className="w-full h-full object-cover grayscale-[20%] object-top"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-8 pb-20 md:pb-32">
        <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-700">
          <p className="text-[#d1ff00] font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Limitless Performance</p>
          <h1 className="text-6xl md:text-9xl font-impact text-white leading-[0.85] mb-8">
            WIN THE <br />MORNING.
          </h1>
          <div className="flex gap-4">
            <Link to="/collections/new-arrivals" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300">
              Shop New Arrivals
            </Link>
            <Link to="/brand-story" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300">
              Watch Film
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
