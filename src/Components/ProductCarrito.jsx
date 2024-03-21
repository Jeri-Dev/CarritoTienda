import { useCart } from "../Hooks/useCart";
import "../index.css";

export default function ProductCarrito({ product }) {
  const { removeFromCart } = useCart();


  return (
    <div>
      {" "}
      <div className="product_carrito">
        <div>
          <img
            className="product_carrito_img"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="product_carrito_text">
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>

        <div className="product_carrito_btns">
          <button
            className="btn-quit"
            onClick={() => {
              removeFromCart(product);
            }}
            value="quit"
          >
            x
          </button>
        </div>
      </div>{" "}
      <hr />
    </div>
  );
}
