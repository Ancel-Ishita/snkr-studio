import React from 'react';
import { ArrowRight } from 'lucide-react';

const FEATURED_SNEAKERS = [
  {
    id: '1',
    name: 'Air Max Custom',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329'
  },
  {
    id: '2',
    name: 'Runner Pro X',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb'
  },
  {
    id: '3',
    name: 'Street Legend',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Designs</h2>
          <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SNEAKERS.map((sneaker) => (
            <div
              key={sneaker.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative pb-[100%]">
                <img
                  src={sneaker.image}
                  alt={sneaker.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {sneaker.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ${sneaker.price.toFixed(2)}
                </p>
                <button className="mt-4 w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                  Customize
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}