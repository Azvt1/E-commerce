import { useState } from "react";

import "./BrowseCategories.css";

export default function BrowseCategories({
  itemList,
  setItemList,
  wholeItemListRef,
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  let updatedItemsList = [];

  const clickHandler = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    if (selectedCategory === "all") {
      setItemList(wholeItemListRef);
      return;
    }
    for (let item of wholeItemListRef) {
      if (item.category === selectedCategory) {
        updatedItemsList.push(item);
      }
    }
    setItemList(updatedItemsList);
  };
  return (
    <div className="browse_categories_container">
      <button
        className={selectedCategory === "all" ? "active" : ""}
        onClick={() => clickHandler("all")}
      >
        All
      </button>
      <button
        className={selectedCategory === "women" ? "active" : ""}
        onClick={() => clickHandler("women")}
      >
        Women
      </button>
      <button
        className={selectedCategory === "men" ? "active" : ""}
        onClick={() => clickHandler("men")}
      >
        Man
      </button>
      <button
        className={selectedCategory === "accessories" ? "active" : ""}
        onClick={() => clickHandler("accessories")}
      >
        Accessories
      </button>
    </div>
  );
}
