import React from 'react';
import { Search, ShoppingCart, Heart, Sun, Moon, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useColorScheme } from '../hooks/useColorScheme';
import { useCart } from '../context/CartContext';

export function Header() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { toggleCart, state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SNKR Studio</h1>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/design" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Customize
              </Link>
              <Link to="/shop" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Shop
              </Link>
              <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleColorScheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {colorScheme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Search className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Heart className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {state.items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/design" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Customize
          </Link>
          <Link to="/shop" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Shop
          </Link>
          <Link to="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}