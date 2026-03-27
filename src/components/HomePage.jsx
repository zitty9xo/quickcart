import React from 'react';
import ProductList from './ProductList';
import '../styles/HomePage.css';

function HomePage({ products, onAddToCart, searchTerm }) {
  // Filter products based on searchTerm
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSearching = searchTerm.trim().length > 0;

  return (
    <div className="home-page">
      {/* Show filtered count if searching */}
      {isSearching && (
        <div className="search-results-info">
          <p>Found <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''} matching "{searchTerm}"</p>
        </div>
      )}

      {/* Show "No products found" if filtered.length === 0 */}
      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <h2>No products found</h2>
          <p>{isSearching 
            ? `We couldn't find any products matching "${searchTerm}". Try a different search term.`
            : 'No products available.'
          }</p>
        </div>
      ) : (
        /* Render ProductList with filtered products */
        <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
      )}
    </div>
  );
}

export default HomePage;
