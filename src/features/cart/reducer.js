const initialState = [];

const cartWithoutItem = (cart, item) =>
  cart.filter((cartItem) => cartItem.id !== item.id);

const itemInCart = (cart, item) =>
  cart.filter((cartItem) => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity++ },
      ];
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return addToCart(state, action.payload);
    case "REMOVE":
      const firstMatchIndex = state.indexOf(action.payload);
      return state.filter((item, index) => index !== firstMatchIndex);
    default:
      return state;
  }
};
export default cartReducer;
