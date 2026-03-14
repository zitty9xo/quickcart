import { useCart } from "../contexts";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="description">{product.description}</p>

      <p className="price">${product.price}</p>

      <button
        className="add-btn"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;