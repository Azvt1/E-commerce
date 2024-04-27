import "./WishlistItem.css";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const WishlistItem = ({
  id,
  image,
  price,
  title,
  handleRemove,
  setStatusMessage,
  setItems,
}) => {
  const userId = localStorage.getItem("userId");
  const addToCart = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/item/addToCart/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
          }),
        }
      );

      const removeItemResponse = await fetch(
        `http://localhost:3000/item/wishlistRemove/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
          }),
        }
      );

      const data = await response.json();
      const removeResponseData = await removeItemResponse.json();

      if (response.ok && removeItemResponse.ok) {
        if (data.success & removeResponseData.success) {
          setStatusMessage("Item was added successfully!");
          handleRemove(id, true);
        } else {
          setStatusMessage("Item is alraedy in the cart!");
          handleRemove(id, true);
        }
      } else {
        setStatusMessage("Failed to add item to the cart");
        console.log("Failed to add item to the cart");
      }
    } catch (error) {
      console.error("Failed to add item to the cart");
      setStatusMessage("Failed to add item to the cart");
    }
  };

  return (
    <div className='wishlist-item' key={id}>
      <div className='image-title-container'>
        <img src={`http://${image}`} alt='item-pictur' />
        <h3>{title}</h3>
      </div>
      <h4>${price}</h4>
      <button className='add-item' onClick={addToCart}>
        Add to cart
      </button>
      <button
        className='remove-item'
        onClick={() => {
          handleRemove(id, false);
        }}
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default WishlistItem;
