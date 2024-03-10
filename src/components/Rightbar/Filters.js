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

  const [filteredColor, setFilteredColor] = useState("");
  const [filteredSize, setFilteredSize] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState(0);

  const applyFilters = (filters) => {
    let filteredItemsCopy = wholeItemsList.slice();

    for (const filter of filters) {
      if (filter.hasOwnProperty("type")) {
        if (filter.type === "Colors") {
          filteredItemsCopy = filteredItemsCopy.filter(
            (item) => item.color === filter.value
          );
        } else if (filter.type === "Size") {
          filteredItemsCopy = filteredItemsCopy.filter((item) =>
            item.size.includes(filter.value)
          );
        } else if (filter.type === "Price") {
          if (filter.value === "Less than $50") {
            filteredItemsCopy = filteredItemsCopy.filter(
              (item) => item.price < 50
            );
          } else if (filter.value === "$50 - $100") {
            filteredItemsCopy = filteredItemsCopy.filter(
              (item) => item.price >= 50 && item.price <= 100
            );
          } else if (filter.value === "More than $100") {
            filteredItemsCopy = filteredItemsCopy.filter(
              (item) => item.price > 100
            );
          }
        }
      }
    }

    setItemList(filteredItemsCopy);
  };

  // const applyFilters = () => {
  //   filteredItems = wholeItemsList.slice();
  //   for (const filter of updatedFilters) {
  //     if (filter.hasOwnProperty("type")) {
  //       if (filter.type === "Colors") {
  //         filteredItems = filteredItems.filter(
  //           (item) => item.color === filter.value
  //         );
  //       } else if (filter.type === "Size") {
  //         filteredItems = filteredItems.filter((item) =>
  //           item.size.includes(filter.value)
  //         );
  //       } else if (filter.type === "Price") {
  //         if (filter.value === "Less than $50") {
  //           filteredItems = filteredItems.filter((item) => item.price < 50);
  //         } else if (filter.value === "$50 - $100") {
  //           filteredItems = filteredItems.filter(
  //             (item) => item.price >= 50 && item.price <= 100
  //           );
  //         } else if (filter.value === "More than $100") {
  //           filteredItems = filteredItems.filter((item) => item.price > 100);
  //         }
  //       }
  //     }
  //   }
  //   setItemList(filteredItems);
  // };

  // const updateFilters = (newFilter) => {
  //   const filterExists = updatedFilters.some(
  //     (filter) =>
  //       filter.type === newFilter.type && filter.value === newFilter.value
  //   );

  //   if (filterExists) {
  //     setUpdatedFilters((prevFilters) =>
  //       prevFilters.filter(
  //         (filter) =>
  //           filter.type !== newFilter.type && filter.value !== newFilter.type
  //       )
  //     );
  //   } else if (
  //     updatedFilters.some((filter) => newFilter.type === filter.type)
  //   ) {
  //     setUpdatedFilters((prevFilters) =>
  //       prevFilters.filter((filter) => filter.type !== newFilter.type)
  //     );
  //     setUpdatedFilters((prevFilters) => [...prevFilters, newFilter]);
  //   } else {
  //     setUpdatedFilters((prevFilters) => [...prevFilters, newFilter]);
  //   }
  //   if (updatedFilters.length > 0) {
  //     applyFilters();
  //   }
  // };

  const updateFilters = (newFilter) => {
    setUpdatedFilters((prevFilters) => {
      const filterExists = prevFilters.some(
        (filter) =>
          filter.type === newFilter.type && filter.value === newFilter.value
      );

      let updatedFiltersCopy;
      if (filterExists) {
        updatedFiltersCopy = prevFilters.filter(
          (filter) =>
            filter.type !== newFilter.type && filter.value !== newFilter.type
        );
      } else if (prevFilters.some((filter) => newFilter.type === filter.type)) {
        updatedFiltersCopy = [
          ...prevFilters.filter((filter) => filter.type !== newFilter.type),
          newFilter,
        ];
      } else {
        updatedFiltersCopy = [...prevFilters, newFilter];
      }

      applyFilters(updatedFiltersCopy);

      return updatedFiltersCopy;
    });
  };

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
