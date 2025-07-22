import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';
import Layout from './Layout'; // ⬅️ Import layout

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList updateCartCount={setCartCount} />} />
          <Route path="/checkout" element={<Checkout updateCartCount={setCartCount} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
