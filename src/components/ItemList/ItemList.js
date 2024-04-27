import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

export default function ItemList({ list }) {
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  };

  const rows = chunkArray(list, 3);
  console.log(rows);
  return list.length > 0 ? (
    <div className='whole_itemList_container'>
      {rows.map((row, rowIndex) => (
        <div className='itemList_row' key={rowIndex}>
          {row.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <Item
                imageURL={item.images[0].url}
                title={item.name}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div className='no_items_container'>
      <h3>Sorry, but there are no items with pictures</h3>
    </div>
  );
}
