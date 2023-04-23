import React from "react";

import "./Modal.css";

export const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? "wrapper" : "clear"}>
      <div className="modal">
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};
