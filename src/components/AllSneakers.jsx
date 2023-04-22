import React, { useEffect } from "react";
import { AiOutlineHeart, AiOutlinePlusSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, postNewSneakers } from "../redux/thunk";

const mainUrl = `http://localhost:3030`;

const AllSneakers = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(postNewSneakers(`${mainUrl}/cart`, item, "SAVE_ITEM"));
  };

  const addToFavorites = (item) => {
    dispatch(
      postNewSneakers(`${mainUrl}/favorites`, item, "SAVE_TO_FAVORITES")
    );
  };

  useEffect(() => {
    dispatch(fetchItems(`${mainUrl}/allSneakers`, "SAVE_ITEMS"));
  }, []);

  return (
    <>
      <ul>
        <h2>All Sneakers</h2>
        {state.allSneakers?.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              <AiOutlineHeart onClick={() => addToFavorites(item)} size={32} />
              <AiOutlinePlusSquare onClick={() => addToCart(item)} size={32} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllSneakers;
