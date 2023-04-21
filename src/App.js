import React, { useState, useEffect } from "react";
import "./App.css";
import AllSneakers from "./components/AllSneakers";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Order from "./components/Order";

function App() {
  return (
    <div className="App">
      <AllSneakers />
      <Cart />
      <Favorite />
      <Order />
    </div>
  );
}

export default App;
