import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  // PUBLIC_URL = "/React-ecommerce-Store-Example" in production
  const prefix = process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_URL
    : '';

  const imgSrc = `${prefix}/${product.image}`; 
  console.log('Loading image from', imgSrc);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={product.name}
        onError={() => console.error(`Failed to load ${imgSrc}`)}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', product })}>
        Add to Cart
      </button>
    </div>
  );
}
