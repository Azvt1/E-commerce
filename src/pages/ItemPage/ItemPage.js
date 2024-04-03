import "./ItemPage.css";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getItems, getItem } from "../../service/api";
import Navbar from "../../components/Navbar/Navbar";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import headerImage from "../../assets/img/clothesHangingFinal.jpeg";
import { FaHeart } from "react-icons/fa";

import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";

export default function ItemPage(props) {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [footerImages, setFooterImages] = useState([]);

  const [wishListStatusMessage, setWishListStatusMessage] = useState("");

  console.log(id);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const addToCart = async () => {
    const response = await fetch(`http://localhost:3000/item/favorite/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
      }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.success) {
        setWishListStatusMessage("Item was successfully added");
      } else {
        setWishListStatusMessage("Item is already in the wishlist cart");
        console.log("already in the wishlist");
      }
    } else {
      console.log("Failed to add item to a wishlist cart");
    }
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/item/${id}`);
        const data = await response.json();
        setItem(data);
        console.log(data);
        if (data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }
      } catch (error) {
        console.log("Error fetching information about single item", error);
      }
    };

    fetchItem();
  }, []);

  if (!item) {
    return <div className="loading">Loading</div>;
  }
  return (
    <div className="">
      <Navbar />
      <HeaderForPages image={headerImage} text={"Item page"} />
      <div className="itemPage_container">
        <div className="images_container">
          <div className="small_images_container">
            {item.images.map((image, id) => {
              return (
                <img
                  className={
                    selectedImage === image ? "small_image_selected" : ""
                  }
                  src={`http://${image.url}`}
                  alt="imag"
                  key={id}
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                />
              );
            })}
          </div>
          <div className="big_image_container">
            <img src={`http://${selectedImage.url}`} alt="imag" />
          </div>
        </div>
        <div className="item_description_container">
          <h2>{item.title}</h2>
          <h2 className="price">${item.price.toFixed(2)}</h2>
          <p className="item_description">{item.description}</p>
          <hr></hr>
          <h3>Color: {item.color}</h3>
          <h3>Size:</h3>
          {item.size.map((size, id) => (
            <button
              className={`size_buttons ${
                selectedSize === size ? "selected" : ""
              }`}
              key={id}
              onClick={() => {
                handleSizeClick(size);
              }}
            >
              {size}
            </button>
          ))}

          <div className="add_to_cart_container">
            <button className="add_to_cart_button">ADD TO CART</button>
            <button className="like_button" onClick={addToCart}>
              {<FaHeart />}
            </button>
          </div>

          <span className="wishlist-status-message">
            {wishListStatusMessage}
          </span>
          <hr></hr>
          <p className="footer_of_description">
            Category: {item.category}, {item.color}
          </p>
        </div>
      </div>

      <SignUp />
      {/* <Footer footerImages={footerImages} /> */}
    </div>
  );
}
