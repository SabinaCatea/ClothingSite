import { useContext } from "react";

import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";
import "./products.scss";

const ProductCard = function ({ product }) {
  const { imageUrl, price, name } = product;

  const { addItemToCard } = useContext(CartContext);

  const addItem = () => addItemToCard(product);
  // const updateItems = () => {
  //   console.log("clicked");
  // };
  return (
    <div className="product-card-container">
      <img alt="" src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItem}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
