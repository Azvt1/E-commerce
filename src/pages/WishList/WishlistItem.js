import "./WishlistItem.css";
import { RxCross2 } from "react-icons/rx";
import React from "react";


const WishlistItem = ({ id, image, price, title, handleRemove }) => {
  return (
    <div className="wishlist-item-container" key={id}>
      <div className="image-title-container">
        <img src={image} alt="item-pictur" />
        <h3>{title}</h3>
      </div>
      <div className="price-container">${price}</div>
      <div className="action-button">
        <button className="add-item">Add to cart</button>
        <button
          className="remove-item"
          onClick={() => {
            handleRemove(id);
          }}>
          
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
