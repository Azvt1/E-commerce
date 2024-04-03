import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import clothesHanging from "../../assets/img/clothesHangingFinal.jpeg";
import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import img1 from "../../assets/finalImages/redJackets/unnamed.jpg";
import { RxCross2 } from "react-icons/rx";
import WishlistItem from "./WishlistItem";
import Footer from "../../components/Footer/Footer";
import React from "react";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        img: img1,
        title: "Red jacket",
        price: 40,
      },
      {
        id: 2,
        img: img1,
        title: "Different jacket with something on",
        price: 76,
      },
      {
        id: 3,
        img: img1,
        title: "Another one",
        price: 56,
      },
    ]);
  }, []);

  const handleRemove = (id) => {
    const updatedItems = wishItems.filter((item) => item.id !== id);
    setWishItems(updatedItems);
  };

  const [wishItems, setWishItems] = useState([]);
  useEffect(() => {
    setWishItems(items);
  }, [items]);
  const userID = localStorage.getItem("userId");

  // useEffect(() => {
  //   const getWishItems = async (userID) => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/wishlist/${userID}`
  //       );
  //       const data = response.json();
  //       setWishItems(data);
  //     } catch (error) {
  //       console.log("Faile to fetch wishlist items", error);
  //     }
  //   };

  //   getWishItems(userID);
  // }, []);

  return (
    <div>
      <Navbar />
      <HeaderForPages image={clothesHanging} text={"WISHLIST"} />
      <div className="wishlist-container">
        <div className="wishlist-title">
            <h3>PRODUCT</h3>
            <h3 id="price">UNIT PRICE</h3>
        </div>
        <div className="wishlist-items">
          {wishItems.map((item) => (
            <WishlistItem
              key={item.id}
              id={item.id}
              image={item.img}
              price={item.price}
              title={item.title}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
