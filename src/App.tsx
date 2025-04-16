import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import { DesignStudio } from './pages/DesignStudio';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';

export function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/design" element={<DesignStudio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
            <Cart />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}