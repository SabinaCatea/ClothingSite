import "./cartItem.scss";

const CartItem = function ({ children, cartItem }) {
  const { name, imageUrl, id, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
        {children}
      </div>
    </div>
  );
};

export default CartItem;
