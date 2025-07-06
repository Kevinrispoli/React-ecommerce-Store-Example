import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart = [] } = useCart() || {};

  return (
    <div className="page cart-page">
      <Cart />
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}
