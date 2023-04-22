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

const saveToFavorite = (state, newSneakers) => {
  return {
    ...state,
    favorites: [...state.favorites, newSneakers],
  };
};

const saveAllFavotires = (state, allSneakers) => {
  return {
    ...state,
    favorites: allSneakers,
  };
};

const saveToOrder = (state, orderSneakers) => {
  console.log(orderSneakers);
  return {
    ...state,
    order: orderSneakers,
  };
};

const sneakersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ITEMS":
      return saveItems(state, action.payload);
    case "GET_CART_ITEMS":
      return getCartItems(state, action.payload);
    case "DELETE_ITEM":
      return deleteItems(state, action.payload);
    case "SAVE_ITEM":
      return saveItem(state, action.payload);
    case "SAVE_TO_FAVORITES":
      return saveToFavorite(state, action.payload);
    case "SAVE_ALL_FAVORITES":
      return saveAllFavotires(state, action.payload);
    case "SAVE_TO_ORDER":
      //   console.log(action);
      return saveToOrder(state, action.payload);
    default:
      return state;
  }
};

export default sneakersReducer;
