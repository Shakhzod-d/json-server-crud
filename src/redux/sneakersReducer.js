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

const deleteItems = (state, id) => {
  return {
    ...state,
    cartItems: state.cartItems.filter((item) => item.id !== id),
  };
};

const saveItem = (state, newSneakers) => {
  return {
    ...state,
    cartItems: [...state.cartItems, newSneakers],
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ITEMS":
      return saveItems(state, action.payload);
    case "GET_CART_ITEMS":
      return getCartItems(state, action.payload);
    case "DELETE_ITEM":
      return deleteItems(state, action.id);
    case "SAVE_ITEM":
      return saveItem(state, action.newSneakers);
    default:
      return state;
  }
};

export default sneakersReducer;
