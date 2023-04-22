import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorites, fetchItems, postNewSneakers } from "../redux/thunk";

const mainUrl = `http://localhost:3030/favorites`;

const Favorite = () => {
  const { favorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const makePayment = () => {
    dispatch(
      postNewSneakers(`http://localhost:3030/order`, favorites, "SAVE_TO_ORDER")
    );
    // dispatch({ type: "SAVE_TO_ORDER", favorites });
    // console.log("dddd", favorites);
  };

  useEffect(() => {
    dispatch(fetchFavorites(mainUrl, "SAVE_ALL_FAVORITES"));
  }, []);

  return (
    <div className="favoriteContainer">
      <ul>
        <h2>Favorites Sneakers</h2>
        {favorites?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <button onClick={makePayment}>make payment</button>
    </div>
  );
};

export default Favorite;
