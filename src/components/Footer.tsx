import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SNKR Studio</h3>
            <p className="text-gray-400">
              Creating custom sneakers that reflect your unique style. Premium quality, innovative design, and exceptional comfort.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link>
              </li>
              <li>
                <Link to="/design" className="text-gray-400 hover:text-white">Customize</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white">My Account</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Returns</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SNKR Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}