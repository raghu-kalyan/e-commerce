// ProductList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const products = [
  {
    id: 1,
    name: 'T-Shirt',
    category: 'T-Shirt',
    price: 499,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753172347/ryan-hoffman-982Nb-awyVE-unsplash_vhlm4p.jpg'
  },
  {
    id: 2,
    name: 'Shoes',
    category: 'Shoes',
    price: 999,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753172341/irene-kredenets-dwKiHoqqxk8-unsplash_cox8vv.jpg'
  },
  {
    id: 3,
    name: 'Hoodie',
    category: 'Hoodie',
    price: 799,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753172336/redicul-pict-T_8gjuk1Weo-unsplash_og8drx.jpg'
  },
  {
    id: 4,
    name: 'Jeans',
    category: 'Jeans',
    price: 699,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753172285/tuananh-blue-Y3c_Ej6BrZw-unsplash_tc1gco.jpg'
  },
  {
    id: 5,
    name: 'Cap',
    category: 'Accessories',
    price: 199,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182617/yang-deng-2loKxdi6Hmo-unsplash_qojuy6.jpg'
  },
  {
    id: 6,
    name: 'Sunglasses',
    category: 'Accessories',
    price: 299,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182600/pexels-didsss-1499477_b2r6ru.jpg'
  },
  {
    id: 8,
    name: 'Formal Shoes',
    category: 'Shoes',
    price: 1299,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182553/pexels-jonathanborba-12031204_yavb2w.jpg'
  },
  {
    id: 9,
    name: 'Track Pants',
    category: 'Jeans',
    price: 499,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182542/pexels-youssef-mahmoud-2154095663-33055599_qcrnz6.jpg'
  },
  {
    id: 10,
    name: 'Jacket',
    category: 'Hoodie',
    price: 1199,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182534/jacket-2821961_1280_pzkm0z.jpg'
  },
  {
    id: 11,
    name: 'Denim Shirt',
    category: 'T-Shirt',
    price: 649,
    image: 'https://res.cloudinary.com/dwrdymsia/image/upload/v1753182523/shirts-1184914_1280_edkexf.jpg'
  },
];


function ProductList({ updateCartCount }) {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const addToCart = (product) => {
    const updated = [...cart, product];
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    updateCartCount(updated.length);
  };

  const filteredProducts = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  return (
    <div className="product-list">
      <h1>Products</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Category filter buttons */}
      <div className="category-buttons">
        {['All', 'T-Shirt', 'Shoes', 'Hoodie', 'Jeans'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active-category' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products display */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Checkout button */}
      <button onClick={() => navigate('/checkout')} className="checkout-btn">
        Go to Checkout
      </button>
    </div>
  );
}

export default ProductList;

