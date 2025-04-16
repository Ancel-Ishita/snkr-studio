import React from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSneakers } from '../hooks/useSneakers';

export function ProductGrid() {
  const { filteredSneakers } = useSneakers();
  const { addItem } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredSneakers.map((sneaker) => (
        <div
          key={sneaker.id}
          className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={sneaker.images[0]}
                alt={sneaker.name}
                className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            {sneaker.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-indigo-600 text-white rounded-full">
                New
              </span>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {sneaker.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {sneaker.description}
            </p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ₹{sneaker.price.toLocaleString('en-IN')}
              </span>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(sneaker.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({sneaker.reviews})
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Size
                </label>
                <select
                  className="ml-3 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                  defaultValue={sneaker.sizes[0]}
                >
                  {sneaker.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() =>
                  addItem({
                    sneakerId: sneaker.id,
                    size: sneaker.sizes[0],
                    quantity: 1,
                    color: sneaker.colors[0],
                  })
                }
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}