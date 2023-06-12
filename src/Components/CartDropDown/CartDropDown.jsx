import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../Context/CartContext";

import "./cartDropDown.scss";

const CartDropDown = function () {
  const { cartItems, isOpen, setIsOpen } = useContext(CartContext);
  const closeDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/check-out">
        <Button onClick={closeDropDown}>Go to checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
