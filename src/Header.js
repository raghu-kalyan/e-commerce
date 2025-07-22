import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header({ cartCount, toggleTheme, currentTheme }) {
  return (
    <header className="app-header">
      <Link to="/" className="logo">ShopNow</Link>
      <div>
        <button onClick={toggleTheme}>
          {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <Link to="/checkout" className="cart-link">Cart ({cartCount})</Link>
      </div>
    </header>
  );
}

export default Header;
