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

  useEffect(() => {
    Promise.all([getItem(id), getItems("footer")])
      .then(([itemInformation, footerImages]) => {
        setItem(itemInformation);
        if (itemInformation.image.length > 0) {
          setSelectedImage(itemInformation.image[0]);
        }
        setFooterImages(footerImages);
      })
      .catch((error) => {
        console.error("Error fetching information about signle item", error);
      });
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

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
            {item.image.map((image, id) => {
              return (
                <img
                  className={
                    selectedImage === image ? "small_image_selected" : ""
                  }
                  src={image}
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
            <img src={selectedImage} alt="imag" />
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
            <button className="like_button">{<FaHeart />}</button>
          </div>
          <hr></hr>
          <p className="footer_of_description">
            Category: {item.category}, {item.color}
          </p>
        </div>
      </div>

      <SignUp />
      <Footer footerImages={footerImages} />
    </div>
  );
}
