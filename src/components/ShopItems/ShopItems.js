import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ShopItems.css";
import Pagination from "../Pagination/Pagination";

export default function ShopItems({
  firstItemIndex,
  lastItemIndex,
  itemList,
  currentItems,
  itemsPerPage,
  setCurrentPage,
}) {
  return (
    <div className="shopItems_container">
      <h4 className="shopItems_title">
        Showing {firstItemIndex + 1} - {lastItemIndex} of {itemList.length}{" "}
        results
      </h4>
      <ItemList list={currentItems} />
      <Pagination
        totalItems={itemList.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
