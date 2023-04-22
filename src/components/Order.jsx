import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../redux/thunk";

const mainUrl = `http://localhost:3030/order`;

const Order = () => {
  const { order } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems(mainUrl, "SAVE_TO_ORDER"));
  }, []);

  return (
    <div className="favoriteContainer">
      <ul>
        <h2>Orders</h2>
        {order?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Order;
