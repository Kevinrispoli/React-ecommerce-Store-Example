import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const handleAdd = () => dispatch({ type: 'ADD_ITEM', product });

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
