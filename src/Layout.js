import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="header">
        <Link to="/" className="logo">MyShop</Link>
        <nav className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/checkout">Cart</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;
