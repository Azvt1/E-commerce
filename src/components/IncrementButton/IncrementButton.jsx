
import React, { useState } from "react";
import "./IncrementButton.css";

const IncrementButton = ({ minValue = 0, maxValue = 100, initialNumber, quantityHandler }) => {

  const handleIncrementCounter = () => {
    if (initialNumber < maxValue) {
        quantityHandler(true)
    }
  };

  const handleDecrementCounter = () => {
    if (initialNumber > minValue) {
        quantityHandler(false)
    }

  };

  return (
    <div className="btn-group">
      <button className="increment-btn" onClick={handleIncrementCounter}>
        <span class="material-symbols-outlined">+</span>
      </button>
      <p>{initialNumber}</p>
      <button className="decrement-btn" onClick={handleDecrementCounter}>
        <span class="material-symbols-outlined">-</span>
      </button>
    </div>
  );
};

export default IncrementButton;