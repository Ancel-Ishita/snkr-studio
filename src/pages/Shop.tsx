import React from 'react';
import { Filters } from '../components/Filters';
import { ProductGrid } from '../components/ProductGrid';

export function Shop() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Sneakers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Filters />
        </aside>
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}