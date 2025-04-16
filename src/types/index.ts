export interface Sneaker {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  colors: string[];
  sizes: number[];
  brand: string;
  isNew: boolean;
  isFeatured: boolean;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
}

export type ColorScheme = 'light' | 'dark';

export interface FilterState {
  brand: string[];
  color: string[];
  size: number[];
  priceRange: [number, number];
  category: string[];
  sortBy: 'price_asc' | 'price_desc' | 'newest' | 'popular';
}

export interface CartItem {
  sneakerId: string;
  size: number;
  quantity: number;
  color: string;
}

export interface WishlistItem {
  sneakerId: string;
  dateAdded: Date;
}

export interface User {
  id: string;
  email: string;
  cart: CartItem[];
  wishlist: WishlistItem[];
}