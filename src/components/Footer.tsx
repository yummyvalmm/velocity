import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        <div>
          <h4 className="font-impact tracking-tight text-lg mb-6 uppercase">Get Help</h4>
          <ul className="space-y-3 text-xs md:text-sm text-gray-400 font-medium">
            <li><Link to="/cart" className="hover:text-white transition-colors duration-300">Order Status</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-300">Shipping & Delivery</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-300">Returns</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-300">Payment Options</Link></li>
            <li><a href="mailto:support@velocity.com" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-impact tracking-tight text-lg mb-6 uppercase">About Velocity</h4>
          <ul className="space-y-3 text-xs md:text-sm text-gray-400 font-medium">
            <li><Link to="/brand-story" className="hover:text-white transition-colors duration-300">Our Story</Link></li>
            <li><Link to="/innovation" className="hover:text-white transition-colors duration-300">Technology</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-300">Careers</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors duration-300">Sustainability</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-impact tracking-tight text-lg mb-6 uppercase">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.795 1.691 4.943 4.943.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.914 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-impact tracking-tight text-lg mb-6 uppercase">Join the Club</h4>
          <p className="text-sm text-gray-400 mb-4">Sign up for early access to product launches, events, and exclusive offers.</p>
          <form className="flex bg-gray-900 rounded-full p-1 overflow-hidden focus-within:ring-2 focus-within:ring-white transition-all duration-300">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none focus:ring-0 px-4 py-2 text-sm w-full outline-none text-white placeholder-gray-500" required />
            <button type="submit" className="bg-white text-black text-xs font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">JOIN</button>
          </form>
          <p className="text-[10px] text-gray-500 mt-3">By signing up, you agree to Velocity's Privacy Policy and Terms of Use.</p>
        </div>
      </div>

      <div className="container mx-auto px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold tracking-widest uppercase">
        <p>© {new Date().getFullYear()} VELOCITY PERFORMANCE. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors duration-200">Guides</Link>
          <Link to="#" className="hover:text-white transition-colors duration-200">Terms of Use</Link>
          <Link to="#" className="hover:text-white transition-colors duration-200">Terms of Sale</Link>
          <Link to="#" className="hover:text-white transition-colors duration-200">Company Details</Link>
          <Link to="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
