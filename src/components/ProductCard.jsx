
// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  // Use PUBLIC_URL for GitHub Pages subdirectory
  const base = process.env.NODE_ENV === 'production' 
    ? process.env.PUBLIC_URL 
    : '';
  const imgSrc = `${base}${product.image}`;

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={product.name}
        onError={() => console.error(`❌ Failed to load image: ${imgSrc}`)}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
