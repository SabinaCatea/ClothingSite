import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CheckOut } from "../CheckOut/CheckOut";

import "./cartCheckOut.scss";

const CartCheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span className="description">Description</span>
        </div>
        <div className="header-block">
          <span className="quantity">Quantity</span>
        </div>
        <div className="header-block">
          <span className="price">Price</span>
        </div>
        <div className="header-block">
          <span className="remove">Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOut key={item.id} cartItem={item}></CheckOut>
      ))}
      <div className="total">total: ${cartTotal}</div>
    </div>
  );
};

export default CartCheckOut;
