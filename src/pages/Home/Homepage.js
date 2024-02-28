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
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import { getItems } from "../../service/api";

export default function Homepage() {
  const [newCollectionsItems, setNewCollectionItems] = useState([]);
  const [categoriesItems, setCategoriesItems] = useState([]);
  const [collectionBgrnd, setCollectionBgrnd] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [sliderN2, setSliderN2] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems("newCollections")
      .then((data) => {
        setNewCollectionItems(data);
      })
      .catch((error) => {
        console.error("There was an error:", error);
      });

    getItems("categories")
      .then((data) => {
        setCategoriesItems(data);
      })
      .catch((error) => {
        console.error("Could not fetch the categories", error);
      });

    getItems("collectionBackgrnd")
      .then((data) => {
        setCollectionBgrnd(data);
      })
      .catch((error) => {
        console.error(
          "Could not fetch the collection with background image",
          error
        );
      });

    getItems("newArrivals")
      .then((data) => {
        setNewArrivals(data);
      })
      .catch((error) => {
        console.error("Could not fetch the new arrivals", error);
      });

    getItems("sliderN2")
      .then((data) => {
        setSliderN2(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Could not fetch the new arrivals", error);
      });
  }, []);

  console.log(sliderN2);

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
      <div className="new_arrivals_banner">
        <NewArrivals
          newArrivals={newArrivals}
          sliderTitle={"OUR NEW ARRIVALS"}
          linkTitle={"View all products"}
        />
      </div>
      <div className="collection_banner">
        <Collection collWBackgrnd={collectionBgrnd} />
        <h1>Collection</h1>
      </div>
      <div className="new_arrivals_banner">
        <NewArrivals
          newArrivals={sliderN2}
          sliderTitle={"BEST SELLING ITEMS"}
          linkTitle={"View all products"}
        />
      </div>
      <div className="player_container">
        <VideoPlayer />
      </div>
    </div>
  );
}
