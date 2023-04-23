import React, { useState, useEffect } from "react";
import "./App.css";
import AllSneakers from "./components/AllSneakers";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Order from "./components/Order";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="App">
      <AllSneakers />
      <Cart />
      <Favorite handleOpen={() => setOpen(true)} />
      <Order />
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
