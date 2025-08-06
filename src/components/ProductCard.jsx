import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  // PUBLIC_URL adds the repo sub-path in production
  const imgSrc = `${process.env.PUBLIC_URL}${product.image}`;
  console.log('🖼️ Loading image from:', imgSrc);

  const handleAdd = () => dispatch({ type: 'ADD_ITEM', product });

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={product.name}
        onError={() => console.error(`❌ Unable to load ${imgSrc}`)}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
