import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ list }) {
  // Function to split list into arrays of three items each
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  };

  // Split the list into arrays of three items each
  const rows = chunkArray(list, 3);

  return list.length > 0 ? (
    <div className="whole_itemList_container">
      {rows.map((row, rowIndex) => (
        <div className="itemList_row" key={rowIndex}>
          {row.map((item) => (
            <Item
              key={item.id}
              imageURL={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div className="no_items_container">
      <h3>Sorry, but there is no items of such category</h3>
    </div>
  );
}
