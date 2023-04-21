import React from "react";

const mainUrl = `http://localhost:3030/favorites`;

const Favorite = () => {
  return (
    <ul>
      <h2>Favorites Sneakers</h2>
      {[]?.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default Favorite;
