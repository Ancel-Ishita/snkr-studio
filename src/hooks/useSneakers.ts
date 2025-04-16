import { useState } from 'react';
import type { Sneaker, FilterState } from '../types';

const SNEAKERS: Sneaker[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 12999,
    description: 'Premium cushioning for everyday comfort.',
    images: ['https://images.unsplash.com/photo-1605348532760-6753d2c43329'],
    colors: ['black', 'white', 'red'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Nike',
    isNew: true,
    isFeatured: true,
    category: 'running',
    stock: 15,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 14999,
    description: 'Responsive boost cushioning for maximum comfort.',
    images: ['https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb'],
    colors: ['blue', 'gray', 'green'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Adidas',
    isNew: false,
    isFeatured: true,
    category: 'running',
    stock: 8,
    rating: 4.8,
    reviews: 95
  },
  {
    id: '3',
    name: 'Puma RS-X',
    price: 8999,
    description: 'Retro-inspired chunky sneakers with modern comfort.',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a'],
    colors: ['black', 'white'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Puma',
    isNew: true,
    isFeatured: true,
    category: 'casual',
    stock: 12,
    rating: 4.3,
    reviews: 67
  },
  {
    id: '4',
    name: 'New Balance 574',
    price: 7999,
    description: 'Classic heritage design with modern comfort.',
    images: ['https://images.unsplash.com/photo-1543508282-6319a3e2621f'],
    colors: ['white', 'navy', 'red'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'New Balance',
    isNew: false,
    isFeatured: false,
    category: 'casual',
    stock: 20,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '5',
    name: 'Nike Air Force 1',
    price: 9999,
    description: 'Iconic street style with premium leather.',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772'],
    colors: ['white', 'black'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Nike',
    isNew: false,
    isFeatured: true,
    category: 'lifestyle',
    stock: 25,
    rating: 4.9,
    reviews: 312
  },
  {
    id: '6',
    name: 'Adidas NMD R1',
    price: 13999,
    description: 'Urban style meets running technology.',
    images: ['https://images.unsplash.com/photo-1556906781-9a412961c28c'],
    colors: ['black', 'red', 'blue'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Adidas',
    isNew: true,
    isFeatured: false,
    category: 'lifestyle',
    stock: 18,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '7',
    name: 'Puma Suede Classic',
    price: 6999,
    description: 'Timeless design with modern updates.',
    images: ['https://images.unsplash.com/photo-1608231387042-66d1773070a5'],
    colors: ['blue', 'red', 'black'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'Puma',
    isNew: false,
    isFeatured: true,
    category: 'classic',
    stock: 30,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '8',
    name: 'New Balance Fresh Foam',
    price: 11999,
    description: 'Premium cushioning for long-distance comfort.',
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23570'],
    colors: ['gray', 'black', 'blue'],
    sizes: [3, 4, 5, 6, 7, 8, 9, 10],
    brand: 'New Balance',
    isNew: true,
    isFeatured: false,
    category: 'running',
    stock: 15,
    rating: 4.6,
    reviews: 167
  }
  // ... Add more sneakers here to reach 50 items
];

const initialFilters: FilterState = {
  brand: [],
  color: [],
  size: [],
  priceRange: [0, 20000],
  category: [],
  sortBy: 'newest'
};

export function useSneakers() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredSneakers = SNEAKERS.filter(sneaker => {
    if (filters.brand.length && !filters.brand.includes(sneaker.brand)) return false;
    if (filters.color.length && !sneaker.colors.some(color => filters.color.includes(color))) return false;
    if (filters.size.length && !sneaker.sizes.some(size => filters.size.includes(size))) return false;
    if (filters.category.length && !filters.category.includes(sneaker.category)) return false;
    if (sneaker.price < filters.priceRange[0] || sneaker.price > filters.priceRange[1]) return false;
    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'newest':
        return Number(b.isNew) - Number(a.isNew);
      case 'popular':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return {
    sneakers: SNEAKERS,
    filteredSneakers,
    filters,
    setFilters,
  };
}