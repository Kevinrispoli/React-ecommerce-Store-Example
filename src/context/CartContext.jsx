import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();
const STORAGE_KEY = 'my-react-store-cart';

function initCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  console.log('🔄 cartReducer', action, 'prevState:', state);
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.product.id);
      if (existing) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    }
    case 'DECREMENT_ITEM': {
      const existing = state.find(item => item.id === action.id);
      if (!existing) return state;
      if (existing.quantity === 1) {
        return state.filter(item => item.id !== action.id);
      }
      return state.map(item =>
        item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], initCart);

  useEffect(() => {
    console.log('💾 Persisting cart:', cart);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}