import React, { useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { fetchItems } from "../redux/thunk";
import { deleteItem } from "../utils/deleteItem";

const cartUrl = `http://localhost:3030/cart`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const deleteUrl = `${cartUrl}/${id}`;
    deleteItem(deleteUrl);
    // dispatch(fetchItems(cartUrl, "GET_CART_ITEMS"));

    // dispatch(fetchItems(`${cartUrl}`, "GET_CART_ITEMS"));

    // UI taraflama update qilish usuli ammo yaxshi emas bu usul chunki 100% backend bilan ishlash kk
    // setAllSneakers(allSneakers.filter((item) => item.id !== id));
  };

  useEffect(() => {
    dispatch(fetchItems(`${cartUrl}`, "GET_CART_ITEMS"));
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <ul>
      <h2>Cart Sneakers</h2>
      {cartItems?.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <FaRegWindowClose onClick={() => handleDelete(item.id)} size={24} />
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
