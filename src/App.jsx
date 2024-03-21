import { useState } from "react";
import ProductList from "./Components/ProductList";
import Nav from "./Components/nav";
import "./index.css";
import FIlter from "./Components/FIlter";
import { CartProvider } from "./context/cart";
import Carrito from "./Components/Carrito"
import FilterProvider from "./context/filtercn";

function App() {
  const [show, setShow] = useState(false);  
  
  return (
    <CartProvider>
      <Nav show={show} setShow={setShow}/>
      <Carrito show={show}/>
      <div style={{marginTop: 100} } >
        <h2 style={{paddingLeft : "24%",paddingBottom : 15, fontSize: 28}}>Productos</h2>
       <div className="section">
       <FilterProvider>
          <FIlter/>
          <ProductList />
        </FilterProvider>
       </div>
      </div>
    </CartProvider>
  );
}

export default App;
