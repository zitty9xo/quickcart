import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from './ProductList';
import '../styles/HomePage.css';

function CategoryPage({ products }) {
  // Get category from URL params
  const { category } = useParams();
  
  // Filter products by category (case-insensitive)
  const filteredProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  return (
    <div className="category-page">
      {/* Show category title */}
      <h2 className="category-title">{category} Products</h2>
      
      {/* Render filtered products or handle empty state */}
      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default CategoryPage;
