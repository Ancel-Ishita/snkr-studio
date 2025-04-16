import React from 'react';
import { Sliders, ChevronDown } from 'lucide-react';
import { useSneakers } from '../hooks/useSneakers';

export function Filters() {
  const { filters, setFilters, sneakers } = useSneakers();
  const [isOpen, setIsOpen] = React.useState(false);

  // Get unique values for filters
  const brands = Array.from(new Set(sneakers.map(s => s.brand)));
  const colors = Array.from(new Set(sneakers.flatMap(s => s.colors)));
  const sizes = Array.from(new Set(sneakers.flatMap(s => s.sizes))).sort((a, b) => a - b);
  const categories = Array.from(new Set(sneakers.map(s => s.category)));

  const toggleFilter = (type: keyof typeof filters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-700 dark:text-gray-200"
        >
          <Sliders className="h-5 w-5 mr-2" />
          Filters
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`space-y-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Sort By */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Sort By</h3>
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Price Range</h3>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))}
              className="w-full"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              ₹{filters.priceRange[1].toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Brands</h3>
          <div className="space-y-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleFilter('brand', brand)}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Colors</h3>
          <div className="space-y-2">
            {colors.map(color => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => toggleFilter('color', color)}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Sizes</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => toggleFilter('size', size)}
                className={`px-2 py-1 text-sm rounded-md ${
                  filters.size.includes(size)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => toggleFilter('category', category)}
                  className="rounded border-gray-300 dark:border-gray-600 text-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={() => setFilters({
            brand: [],
            color: [],
            size: [],
            priceRange: [0, 20000],
            category: [],
            sortBy: 'newest'
          })}
          className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}