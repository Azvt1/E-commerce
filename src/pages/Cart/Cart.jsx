import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import clothesHanging from "../../assets/img/clothesHangingFinal.jpeg";
import img1 from "../../assets/finalImages/redJackets/unnamed.jpg";
import "./Cart.css"
import CartItem from "./CartItem";
import Footer from "../../components/Footer/Footer";
export const Cart = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([{
      id: 1,
      title: "Red Jacket",
      img: img1,
      price: 40,
      quantity: 2
    }, 
  {
    id: 2,
    img: img1,
    title: "Jacket",
    price: 80,
    quantity: 3
  }])
  }, [])
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const removeHandler = (id) => {
    const updatedList = cartItems.filter(item => item.id !== id);
    setCartItems(updatedList);
  }

  return (
    <div>
      <Navbar />
      <HeaderForPages image={clothesHanging} text={"CART"}/>
      <div className="cart-container">
        <div className="cart-title">
          <h3>PRODUCT</h3>
          <h3 className="center-title">UNIT PPRICE</h3>
          <h3 className="center-title">QUANTITY</h3>
          <h3 className="center-title">TOTAL</h3>
        </div>
        
        {cartItems.map(item => 
          (
            <CartItem title={item.title} image={item.img} price={item.price} quantity={item.quantity} id={item.id} removeHandler={removeHandler} />
          )
        )}
     </div>  

     <Footer />
    </div>
  );
};
