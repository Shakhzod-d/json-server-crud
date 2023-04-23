import React from "react";

import "./Modal.css";

export const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? "wrapper" : "clear"}>
      <div className={isOpen ? "modal" : "modal_reverse"}>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};
