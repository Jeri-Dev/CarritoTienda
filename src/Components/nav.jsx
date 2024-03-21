import IconShoppingCart from "../assets/CartIcon";
import "../index.css";
import {useCart} from "../Hooks/useCart"


export default function Nav({setShow, show}) {
  const {quantityInCart} = useCart()

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="nav">
        <h1>Tienda Online</h1>
        <button onClick={handleClick}>
          <IconShoppingCart h="30px" w="30px" />{" "}
        <span className="button__badge">{quantityInCart}</span>
        </button>
      </div>
    </>
  );
}
