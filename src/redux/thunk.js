import { fetchItem } from "../utils/fetchData";

export const fetchItems = (url, ACTION_TYPE) => async (dispatch) => {
  const data = await fetchItem(url);
  dispatch({ type: ACTION_TYPE, payload: data });
};

export const postNewSneakers = (url, newSneakers) => async (dispatch) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSneakers),
  };
  let resData;

  try {
    const response = await fetch(url, requestOptions);
    resData = await response.json();
  } catch (error) {
    console.error(error);
  }
  //   dispatch({ type: "SAVE_ITEMS", allSneakers: data });
};
