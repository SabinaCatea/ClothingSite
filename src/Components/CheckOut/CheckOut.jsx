import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

import "./checkOut.scss";

export const CheckOut = function ({ cartItem }) {
  const { name, imageUrl, id, quantity, price } = cartItem;
  const { addItemToCard, removeItemFromCard, deleteItemFromCard } =
    useContext(CartContext);

  const addItem = () => addItemToCard(cartItem);
  const removeItem = () => removeItemFromCard(cartItem);
  const deleteItem = () => deleteItemFromCard(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        {" "}
        <img src={imageUrl} alt=""></img>
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;{" "}
        </div>
        <span className="value">{quantity} </span>
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <button onClick={deleteItem}>&#10005;</button>
    </div>
  );
};

export default CheckOut;
