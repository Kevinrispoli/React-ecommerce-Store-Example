import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { dispatch } = useCart();
  return (
    <div className="cart-item">
      <span>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</span>
      <div className="item-controls">
        <button onClick={() => dispatch({ type: 'DECREMENT_ITEM', id: item.id })}>-</button>
        <button onClick={() => dispatch({ type: 'ADD_ITEM', product: item })}>+</button>
        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>Remove</button>
      </div>
    </div>
  );
}