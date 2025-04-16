import React, { createContext, useContext, useReducer } from 'react';
import type { CartItem, Sneaker } from '../types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { sneakerId: string; size: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { sneakerId: string; size: number; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.sneakerId === action.payload.sneakerId && item.size === action.payload.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }

      return { ...state, items: [...state.items, action.payload] };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.sneakerId === action.payload.sneakerId && item.size === action.payload.size)
        ),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.sneakerId === action.payload.sneakerId && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (sneakerId: string, size: number) => void;
  updateQuantity: (sneakerId: string, size: number, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  getCartTotal: (sneakers: Sneaker[]) => number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (sneakerId: string, size: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { sneakerId, size } });
  };

  const updateQuantity = (sneakerId: string, size: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { sneakerId, size, quantity } });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = (sneakers: Sneaker[]) => {
    return state.items.reduce((total, item) => {
      const sneaker = sneakers.find(s => s.id === item.sneakerId);
      return total + (sneaker?.price || 0) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}