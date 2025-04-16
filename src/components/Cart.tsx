import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSneakers } from '../hooks/useSneakers';

export function Cart() {
  const { state, removeItem, updateQuantity, toggleCart, getCartTotal } = useCart();
  const { sneakers } = useSneakers();

  const cartTotal = getCartTotal(sneakers);

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={toggleCart} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-6 border-b dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <ShoppingBag className="h-16 w-16 text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
                  {state.items.map((item) => {
                    const sneaker = sneakers.find((s) => s.id === item.sneakerId);
                    if (!sneaker) return null;

                    return (
                      <li key={`${item.sneakerId}-${item.size}`} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={sneaker.images[0]}
                            alt={sneaker.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                              <h3>{sneaker.name}</h3>
                              <p className="ml-4">₹{sneaker.price.toLocaleString('en-IN')}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              Size: {item.size}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.sneakerId, item.size, Math.max(0, item.quantity - 1))}
                                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-gray-500 dark:text-gray-400">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.sneakerId, item.size, item.quantity + 1)}
                                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.sneakerId, item.size)}
                              className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 dark:border-gray-800 px-4 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
              <p>Subtotal</p>
              <p>₹{cartTotal.toLocaleString('en-IN')}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                className="w-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 rounded-full"
                onClick={() => {/* TODO: Implement checkout */}}
              >
                Checkout
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
              <button
                type="button"
                className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                onClick={toggleCart}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}