import { createContext, useState, useEffect, useReducer } from "react";
export const createAction = (type, payload) => ({ type, payload });

const removeCartItem = function (cartItems, productToRemove) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  // return [...cartItems, { ...productToAdd, quantity: 0 }];
};

const addCardItem = function (cartItems, productToAdd) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  newCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "IS_CART_OPEN":
      return {
        ...state,
        isOpen: payload,
      };

    default:
      throw new Error(`Unhanded type: ${type} in UseReducer`);
  }
};

const deleteCartItem = function (cartItems, productToRemove) {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  isOpen: false,

  cartItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  deleteItemFromCard: () => {},
  cartTotal: 0,
  newCount: 0,
});

export const CartProvider = function ({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  // //const [cartItems, setCartItem] = useState([]);
  // const [newCount, setNewCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ newCount, cartTotal, cartItems }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  // useEffect(() => {
  //   const count = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setNewCount(count);
  // }, [cartItems]);

  // useEffect(() => {
  //   const amount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(amount);
  // }, [cartItems]);

  const updateCartItemReducers = (newCartItems) => {
    const count = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const amount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems: newCartItems,
      newCount: count,
      cartTotal: amount,
    };

    dispatch(createAction("SET_CART_ITEMS", payload));
  };

  const addItemToCard = (productToAdd) => {
    const newCartItems = addCardItem(cartItems, productToAdd);
    updateCartItemReducers(newCartItems);
  };

  const removeItemFromCard = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducers(newCartItems);
  };

  const deleteItemFromCard = (productToRemove) => {
    const newCartItems = deleteCartItem(cartItems, productToRemove);
    updateCartItemReducers(newCartItems);
  };
  // const setIsOpen = (bool) => {
  //   dispatch({ type: "IS_CART_OPEN", payload: bool });
  // };

  const value = {
    isOpen,
    cartItems,
    addItemToCard,
    newCount,
    removeItemFromCard,
    deleteItemFromCard,
    cartTotal,
    setIsOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
