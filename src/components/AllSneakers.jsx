import React, { useEffect } from "react";
import { AiOutlineHeart, AiOutlinePlusSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchItem } from "../utils/fetchData";
import { fetchItems, postNewSneakers } from "../redux/thunk";

const mainUrl = `http://localhost:3030`;

const AllSneakers = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = async (id) => {
    const resData = await fetchItem(`${mainUrl}/allSneakers/${id}`);
    dispatch(postNewSneakers(`${mainUrl}/cart`, resData));
    dispatch(fetchItems(`${mainUrl}/cart`, "GET_CART_ITEMS"));
  };

 
  useEffect(() => {
    dispatch(fetchItems(`${mainUrl}/allSneakers`, "SAVE_ITEMS"));
  }, []);


  return (
    <ul>
      <h2>All Sneakers</h2>
      {state.allSneakers?.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <AiOutlineHeart onClick={() => {}} size={32} />
            <AiOutlinePlusSquare onClick={() => addToCart(item.id)} size={32} />
          </li>
        );
      })}
    </ul>
  );
};

export default AllSneakers;
