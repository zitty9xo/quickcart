import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ products }) {

  return (
    <div className="product-grid">

      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );

}

export default ProductList;