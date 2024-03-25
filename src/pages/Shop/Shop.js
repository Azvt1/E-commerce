import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import Navbar from "../../components/Navbar/Navbar";

import clothesHanging from "../../assets/img/clothesHangingFinal.jpeg";
import ShopItems from "../../components/ShopItems/ShopItems";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Shop.css";
import { useEffect, useRef, useState } from "react";
import { getItems } from "../../service/api";
import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
const Shop = () => {
  const [itemList, setItemList] = useState([]);
  const [colorsList, setColorsList] = useState([]);
  const [sizes, setSizes] = useState([]);
  const wholeItemListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItems, setCurrentItems] = useState([]);
  const [error, setError] = useState(null);
  const [footerImages, setFooterImages] = useState([]);

  let lastItemIndex = currentPage * itemsPerPage;
  let firstItemIndex = lastItemIndex - itemsPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/item");
        const data = await response.json();
        setItemList(data);
        const uniqueColor = [...new Set(data.map((item) => item.color))];
        const uniqueSizes = [...new Set(data.flatMap((item) => item.size))];
        setSizes(uniqueSizes);
        setColorsList(uniqueColor);
        wholeItemListRef.current = data;
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    lastItemIndex = currentPage * itemsPerPage;
    firstItemIndex = lastItemIndex - itemsPerPage;
    if (itemList && itemList.length > 0) {
      setCurrentItems(itemList.slice(firstItemIndex, lastItemIndex));
    }
    setIsLoading(false);
  }, [currentPage, itemsPerPage, itemList]);

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <HeaderForPages image={clothesHanging} text={"SHOP"} />
      <div className="shop_container">
        <ShopItems
          currentItems={currentItems}
          firstItemIndex={firstItemIndex}
          lastItemIndex={lastItemIndex}
          itemList={itemList}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <Rightbar
          itemList={itemList}
          setItemList={setItemList}
          wholeItemListRef={wholeItemListRef.current}
          colorList={colorsList}
          sizes={sizes}
        />
      </div>

      <SignUp />
      {/* <Footer footerImages={footerImages} /> */}
    </div>
  );
};

export default Shop;
