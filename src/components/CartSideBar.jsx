import "../styles/CartSidebar.css";

function CartSidebar({
  isOpen,
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  totalPrice
}) {

  return (

    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

      <div className="cart-header">

        <h2>Your Cart</h2>

        <button onClick={onClose}>X</button>

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
                    onClick={() => onDecrease(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => onIncrease(item.id)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <h3 className="total">
            Total: ${totalPrice}
          </h3>

        </>

      )}

    </div>

  );

}

export default CartSidebar;