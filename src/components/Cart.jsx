// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
  const { cart = [] } = useCart() || {};
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
