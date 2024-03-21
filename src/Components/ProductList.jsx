import useFilter from "../Hooks/useFilter";
import Product from "./Product";
import useFetch from "../Hooks/useFetch"

export default function ProductList() {
  
  const products = useFetch("https://dummyjson.com/products")

  const { filterProducts } = useFilter();
  const filteredProducts = filterProducts(products);
  return (
    <div className="product_list" >
        {
         filteredProducts.length == 0 ? <p>No hay productos para mostrar</p> : filteredProducts.map(item => (
          <Product key={item.id} products={item} />
          
        )) 
        }
       
    </div>
  )
}
