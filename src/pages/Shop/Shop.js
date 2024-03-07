import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import Navbar from "../../components/Navbar/Navbar";

import clothesHanging from "../../assets/img/clothesHangingFinal.jpeg";
import ShopItems from "../../components/ShopItems/ShopItems";
import Pagination from "../../components/Pagination/Pagination";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./Shop.css";
import { useEffect, useRef, useState } from "react";
import { getItems } from "../../service/api";
const Shop = () => {
  const [itemList, setItemList] = useState(null);
  const [colorsList, setColorsList] = useState([]);
  const [sizes, setSizes] = useState([]);
  const wholeItemListRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    Promise.all([
      getItems("shopItems"),
      getItems("shopItems/colors"),
      getItems("shopItems/sizes"),
    ])
      .then(([items, colors, sizes]) => {
        setItemList(items);
        setColorsList(colors);
        setSizes(sizes);
        wholeItemListRef.current = items;
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  let currentItems = [];
  if (itemList && itemList.length > 0) {
    currentItems = itemList.slice(firstItemIndex, lastItemIndex);
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
        />
        <Rightbar
          itemList={itemList}
          setItemList={setItemList}
          wholeItemListRef={wholeItemListRef.current}
          colorList={colorsList}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default Shop;
