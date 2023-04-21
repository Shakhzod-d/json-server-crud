const initialState = {
  allSneakers: [],
  cartItems: [],
  favorites: [],
  order: [],
};

const saveItems = (state, allSneakers) => {
  return {
    ...state,
    allSneakers,
  };
};

const getCartItems = (state, cartItems) => {
  return {
    ...state,
    cartItems,
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ITEMS":
      return saveItems(state, action.payload);
    case "GET_CART_ITEMS":
      return getCartItems(state, action.payload);
    default:
      return state;
  }
};

export default sneakersReducer;
