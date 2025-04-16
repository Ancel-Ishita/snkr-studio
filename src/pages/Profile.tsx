import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Heart } from 'lucide-react';

export function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <button
            onClick={handleSignOut}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Account Details
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Email: {user.email}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Heart className="h-5 w-5 mr-2" />
            Wishlist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Wishlist items will be mapped here */}
            <div className="text-gray-500 dark:text-gray-400">
              Your wishlist is empty
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}