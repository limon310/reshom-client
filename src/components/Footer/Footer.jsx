import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-serif font-bold mb-4">Reshom Fashion</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Premium collection of traditional and modern wear for everyone. Quality you can trust.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link className="hover:text-black" to="/collection">New Arrivals</Link></li>
            <li><Link className="hover:text-black" to="/collection">Best Sellers</Link></li>
            <li><Link className="hover:text-black" to="/">Sale</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link className="hover:text-black" to="/collection">Contuct Us</Link></li>
            <li><Link className="hover:text-black" to="/">Shipping Policy</Link></li>
            <li><Link className="hover:text-black" to="/">Return Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Follow Us</h4>
          <div className="flex gap-4">
            <FaFacebook size={20} className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram size={20} className="hover:text-pink-600 cursor-pointer" />
            <FaTwitter size={20} className="hover:text-sky-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} ReshomFashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;