import "../styles/Header.css";

function Header({ cartItemCount, onCartClick, searchTerm, onSearchChange }) {

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🛒 QuickCart</h1>
        
        <input
          type="text"
          placeholder="Search products by name, category..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
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