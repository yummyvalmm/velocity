
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedStory: React.FC = () => {
  return (
    <section className="py-20">
      <div className="relative h-[600px] w-full overflow-hidden bg-black flex items-center">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Gym tech"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 px-12 md:px-24 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d1ff00] mb-4 block">The Lab</span>
          <h2 className="text-5xl md:text-7xl font-impact text-white mb-6 leading-tight">
            ENGINEERED <br />TO EXPLODE.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Experience the new Aero-Flow technology. Maximum ventilation meets lightning-fast response times. Designed for the athlete who never stops.
          </p>
          <Link to="/innovation" className="inline-block bg-[#d1ff00] text-black px-10 py-4 rounded-full font-impact text-lg hover:scale-105 transition-transform">
            EXPLORE TECHNOLOGY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
