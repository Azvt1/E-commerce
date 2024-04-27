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
import Pagination from "../../components/Pagination/Pagination";

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [wishItems, setWishItems] = useState([]);
  const [currentWishListItems, setCurrentWishListItems] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const userId = localStorage.getItem("userId");
  let lastItemIndex = currentPage * itemsPerPage;
  let firstItemIndex = lastItemIndex - itemsPerPage;

  const userID = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/item/wishlist/${userID}`
        );

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("err");
        console.error("Error fetching wishlist: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    lastItemIndex = currentPage * itemsPerPage;
    firstItemIndex = lastItemIndex - itemsPerPage;
    if (items && items.length > 0) {
      setCurrentWishListItems(items.slice(firstItemIndex, lastItemIndex));
      setIsLoading(false);
    }
  }, [currentPage, itemsPerPage, items]);

  const handleRemove = async (id, addToCartButton) => {
    if (!addToCartButton) {
      try {
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
        const removeResponseData = await removeItemResponse.json();

        if (removeItemResponse.ok) {
          if (removeResponseData.success) {
            setStatusMessage("Item was successfuly removed");
          } else {
            setStatusMessage("Couldn't remove item from wishlist");
          }
        } else {
          setStatusMessage("Failed to remove item from wishlist");
        }
      } catch (error) {
        console.error("Error removing item from wishlist");
      }
    }

    const updatedItems = wishItems.filter((item) => item.id !== id);
    const updatedCurrentWishListItems = currentWishListItems.filter(
      (item) => item.id !== id
    );
    setWishItems(updatedItems);
    setCurrentWishListItems(updatedCurrentWishListItems);
  };

  useEffect(() => {
    setWishItems(items);
  }, [items]);

  if (isLoading) {
    if (items.length === 0) {
      return (
        <div>
          <Navbar />
          <h2 className='no-items'>
            You don't have any items in your wishlist
          </h2>
        </div>
      );
    }
  }
  console.log(items);
  return (
    <div>
      <Navbar />
      <HeaderForPages image={clothesHanging} text={"WISHLIST"} />
      <div className='wishlist-container'>
        <div className='wishlist-title'>
          <h3>PRODUCT</h3>
          <h3 className='wishlist-center-title'>UNIT PRICE</h3>
        </div>
        <div className='wishList'>
          {items.length == 0 ? (
            <h2 className='empty-wishlist'>
              {" "}
              You do not have any items in wishlist
            </h2>
          ) : (
            currentWishListItems.map((item) => (
              <WishlistItem
                key={item.id}
                id={item.id}
                image={item.images[0].url}
                price={item.price}
                title={item.name}
                handleRemove={handleRemove}
                setStatusMessage={setStatusMessage}
                setItems={setItems}
              />
            ))
          )}
        </div>
        <Pagination
          totalItems={wishItems.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <h3 className='status-message'>{statusMessage}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
