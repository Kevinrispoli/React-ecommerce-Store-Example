import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function NavBar() {
  // Grab cart array from context (default to [])
  const { cart = [] } = useCart() || {};

  // Total up all quantities
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Shop
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Cart{count > 0 && ` (${count})`}
      </NavLink>
    </nav>
  );
}
