export const fetchItems = (url, ACTION_TYPE) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const resData = await response.json();
    // console.log(resData, ACTION_TYPE);
    dispatch({ type: ACTION_TYPE, payload: resData });
  } catch (error) {
    console.error(error);
  }
};

export const postNewSneakers =
  (url, newSneakers, ACTION_TYPE) => async (dispatch) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSneakers),
    };

    try {
      const response = await fetch(url, requestOptions);
      const resData = await response.json();
      if (response.ok) {
        dispatch({ type: ACTION_TYPE, payload: resData });
      }
    } catch (error) {
      alert("this item is already added");
      console.error(error);
    }
  };

export const deleteItem = (url, id) => async (dispatch) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: id });
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchFavorites = (url, ACTION_TYPE) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const resData = await response.json();
    dispatch({ type: ACTION_TYPE, payload: resData });
  } catch (error) {
    console.error(error);
  }
};
