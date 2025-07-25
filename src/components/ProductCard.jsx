// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  // Determine base path: empty in development, PUBLIC_URL in production
  const base = process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_URL
    : '';

  const handleAdd = () => {
    console.log('👆 ProductCard: Add to Cart clicked:', product);
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <div className="card">
      <img
        src={`${base}${product.image}`}  // ensures correct path on GitHub Pages
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
