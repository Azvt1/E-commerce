import React, { useState } from "react";
import Collapsible from "../Collapsible/Collapsible";
import "./Filters.css";
export default function Filters({
  colorList,
  itemList,
  setItemList,
  wholeItemsList,
  sizes,
}) {
  let updatedFilters = [];
  return (
    <div className="main_filters_container">
      <h3 className="filters_title">
        Filter by:
        <hr></hr>
        <Collapsible
          title={"Colors"}
          content={colorList}
          itemList={wholeItemsList}
          setItemList={setItemList}
          filters={updatedFilters}
        />
        <Collapsible
          title={"Size"}
          content={sizes}
          itemList={wholeItemsList}
          setItemList={setItemList}
          filters={updatedFilters}
        />
        <Collapsible
          title={"Price"}
          content={["Less than $50", "$50 - $100", "More than $100"]}
          itemList={wholeItemsList}
          setItemList={setItemList}
          filters={updatedFilters}
        />
      </h3>
    </div>
  );
}
