import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🛒 QuickCart</h1>
        <div className="cart-icon" onClick={onCartClick}>
          🛒
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;