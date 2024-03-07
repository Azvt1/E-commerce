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
  const [updatedFilters, setUpdatedFilters] = useState([]);

  const updateFilters = (newFilter) => {
    const filterExists = updatedFilters.some(
      (filter) =>
        filter.type === newFilter.type && filter.value === newFilter.value
    );

    if (filterExists) {
      setUpdatedFilters((prevFilters) =>
        prevFilters.filter(
          (filter) =>
            filter.type !== newFilter.type && filter.value !== newFilter.type
        )
      );
    } else if (
      updatedFilters.some((filter) => newFilter.type === filter.type)
    ) {
      setUpdatedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter.type !== newFilter.type)
      );
      setUpdatedFilters((prevFilters) => [...prevFilters, newFilter]);
    } else {
      setUpdatedFilters((prevFilters) => [...prevFilters, newFilter]);
    }
  };

  console.log(updatedFilters);

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
          updateFilters={updateFilters}
        />
        <Collapsible
          title={"Size"}
          content={sizes}
          itemList={wholeItemsList}
          setItemList={setItemList}
          filters={updatedFilters}
          updateFilters={updateFilters}
        />
        <Collapsible
          title={"Price"}
          content={["Less than $50", "$50 - $100", "More than $100"]}
          itemList={wholeItemsList}
          setItemList={setItemList}
          filters={updatedFilters}
          updateFilters={updateFilters}
        />
      </h3>
    </div>
  );
}
