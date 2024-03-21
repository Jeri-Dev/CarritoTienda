import { useCart } from "../Hooks/useCart";

export default function Product({ products }) {


  const {cart, addToCart, removeFromCart} = useCart()
  const isInCart = cart.findIndex(item => item.id == products.id);
  
  return (
    <div key={products.id} className="product">
     
      <div className="product_head">
        <img src={products.thumbnail} alt={products.title} />
      </div>
      <div className="product_body">
        <p className="product_body_name">{products.title}</p>
        <p className="product_body_price">${products.price}</p>
        <button className="button_type1" onClick={() => {
          isInCart >= 0 ? removeFromCart(products) : ( addToCart(products) )       
        }
        }>{
          isInCart >= 0 ?"Eliminar del Carrito"  :  "Añadir al Carrito"
        }</button>
      </div>
    </div>
  );
}
