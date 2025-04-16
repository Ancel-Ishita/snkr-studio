import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3"
          alt="Sneakers collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Design Your Perfect Sneakers
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Customize every detail and create your unique style with our interactive 3D configurator.
          </p>
          <div className="flex space-x-4">
            <Link to="/design" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Designing
            </Link>
            <Link to="/shop" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}