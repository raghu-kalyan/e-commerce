import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartData);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePurchase = () => {
    alert("🎉 Purchase Successful! Thank you for shopping.");
    localStorage.removeItem('cart');
    navigate('/');
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cart.map((item, index) => (
              <div key={index} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <button className="remove-button" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h3>Total: ₹{getTotalPrice()}</h3>
            <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
