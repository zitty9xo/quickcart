import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  
  const total = getTotalPrice();
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p>Your cart is empty</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page-content">
          {/* Map through cart items */}
          <div className="cart-items-list">
            {cart.map(item => (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          {/* Show total */}
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
          
          {/* Action buttons */}
          <div className="cart-actions">
            <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
            <button className="btn btn-primary">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
