import React, { useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { deleteItem, fetchItems } from "../redux/thunk";

const cartUrl = `http://localhost:3030/cart`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const deleteUrl = `${cartUrl}/${id}`;
    dispatch(deleteItem(deleteUrl, id));
    // dispatch(fetchItems(cartUrl, "GET_CART_ITEMS"));
  };

  useEffect(() => {
    dispatch(fetchItems(cartUrl, "GET_CART_ITEMS"));
  }, []);

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
