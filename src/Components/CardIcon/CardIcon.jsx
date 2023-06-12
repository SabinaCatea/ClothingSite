import { useContext } from "react";

import "./cardIcon.scss";
import { ReactComponent as ShoppingBag } from "../../Assets/shopping-bag.svg";
import { CartContext } from "../../Context/CartContext";

const CardIcon = function () {
  const { isOpen, setIsOpen, cartItems, newCount } = useContext(CartContext);
  const showDropDrown = () => {
    setIsOpen(!isOpen);
  };
  // const countItems = countItems.lenght;

  return (
    <div className="cart-icon-container" onClick={showDropDrown}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{newCount}</span>
    </div>
  );
};

export default CardIcon;
