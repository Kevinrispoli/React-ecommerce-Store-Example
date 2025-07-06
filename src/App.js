import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './styles.css';

export default function App() {
  return (
    <CartProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header><h1>Simple React Store</h1></header>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
