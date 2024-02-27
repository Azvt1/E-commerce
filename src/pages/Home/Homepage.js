import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Categories from "../../components/Categories/Categories";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import "./Homepage.css";
import { Slider } from "../../components/Slider/Slider";
import ladyInGlasses from "../../assets/img/LadyInGlasses.jpeg";
import guyInJacket from "../../assets/img/guyInJacket.jpeg";
import womanOnChair from "../../assets/img/womanOnChair.jpeg";
import ladyInJeans from "../../assets/img/ladyInJeans.jpeg";
import Collection from "../../components/Collection/Collection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";

import {
  getNewCollectionsItems,
  getCategoriesItems,
  getCollectionOnBgrnd,
  getNewArrivals,
} from "../../service/api";

export default function Homepage() {
  const [newCollectionsItems, setNewCollectionItems] = useState([]);
  const [categoriesItems, setCategoriesItems] = useState([]);
  const [collectionBgrnd, setCollectionBgrnd] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNewCollectionsItems()
      .then((data) => {
        setNewCollectionItems(data);
      })
      .catch((error) => {
        console.error("There was an error:", error);
      });

    getCategoriesItems()
      .then((data) => {
        setCategoriesItems(data);
      })
      .catch((error) => {
        console.error("Could not fetch the categories", error);
      });

    getCollectionOnBgrnd()
      .then((data) => {
        setCollectionBgrnd(data);
      })
      .catch((error) => {
        console.error(
          "Could not fetch the collection with background image",
          error
        );
      });

    getNewArrivals()
      .then((data) => {
        setNewArrivals(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Could not fetch the new arrivals", error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="swiper">
        <h1>New Collections</h1>
        <Slider testData={newCollectionsItems} />
      </div>
      <div className="main_container">
        <div className="container">
          <ServiceCards />
          <Categories items={categoriesItems} />
        </div>
      </div>
      <div className="collection_banner">
        <Collection collWBackgrnd={collectionBgrnd} />
        <h1>Collection</h1>
      </div>
      <div className="new_arrivals_banner">
        <NewArrivals newArrivals={newArrivals} />
      </div>
    </div>
  );
}
