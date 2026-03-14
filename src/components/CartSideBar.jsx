import { useCart } from "../contexts";
import "../styles/CartSidebar.css";

function CartSidebar() {
  const { isCartOpen, cart, toggleCart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (

    <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>

      <div className="cart-header">

        <h2>Your Cart</h2>

        <button onClick={toggleCart}>X</button>

      </div>

      {cart.length === 0 ? (

        <p className="empty">
          Your cart is empty
        </p>

      ) : (

        <>

          {cart.map(item => (

            <div key={item.id} className="cart-item">

              <img src={item.image} alt={item.name} />

              <div className="cart-info">

                <h4>{item.name}</h4>

                <p>${item.price}</p>

                <div className="qty-controls">

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <h3 className="total">
            Total: ${getTotalPrice().toFixed(2)}
          </h3>

        </>

      )}

    </div>

  );

}

export default CartSidebar;