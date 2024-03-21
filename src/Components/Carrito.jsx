import React, { useEffect} from "react";
import ProductCarrito from "./ProductCarrito";

import {useCart} from "../Hooks/useCart"

export default function Carrito({ show }) {

  
  const { cart, setCart } = useCart()

  useEffect(() => {
      (cart.length > 0 && cart.length == 0) && (localStorage.setItem("cart", JSON.stringify(cart)))
  }, [cart])

  useEffect(() => {
    const getlC = localStorage.getItem("cart");
    if (getlC) {
      setCart(JSON.parse(getlC)) 
    }
  }, [setCart])


  const getTotalPrice = () => {
    let i = 0;
    cart.forEach(item => {
      i += item.price
    })
    if(cart.length > 0){
      return i
    }else {
      return 0
    }
  } 
  
  return (
    <div className="carrito" style={show ? { right: 0 } : { right: -400 }}>
      
      <p>Carrito</p>
      <div className="carrito_products">
        {
        cart.length > 0 ? cart.map(item => (
          item.id != 203948 ?<ProductCarrito key={item.id} product={item} carrito={cart} />: ""
        )) : <p>No hay productos</p>}
      </div>

      <div className="carrito_pago" style={show ? { right: 0 } : { right: -400 }}>

      <p>Total a Pagar: {getTotalPrice()}</p>
      <button>Ir a Pagar</button>
      </div>
      
    </div>
  );
}
