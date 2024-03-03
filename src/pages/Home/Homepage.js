import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";

import Categories from "../../components/Categories/Categories";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import "./Homepage.css";
import { Slider } from "../../components/Slider/Slider";
import Collection from "../../components/Collection/Collection";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import { getItems } from "../../service/api";
import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";

export default function Homepage() {
  const [newCollectionsItems, setNewCollectionItems] = useState([]);
  const [categoriesItems, setCategoriesItems] = useState([]);
  const [collectionBgrnd, setCollectionBgrnd] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [sliderN2, setSliderN2] = useState([]);
  const [complements, setComplements] = useState([]);
  const [footerImages, setFooterImages] = useState([]);
  const videoPlayerUrlRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getItems("newCollections"),
      getItems("categories"),
      getItems("collectionBackgrnd"),
      getItems("newArrivals"),
      getItems("sliderN2"),
      getItems("videoPlayer"),
      getItems("complements"),
      getItems("footer"),
    ])
      .then(
        ([
          newCollections,
          categories,
          collectionBgrnd,
          newArrivals,
          sliderN2,
          videoPlayer,
          complements,
          footerImages,
        ]) => {
          setNewCollectionItems(newCollections);
          setCategoriesItems(categories);
          setCollectionBgrnd(collectionBgrnd);
          setNewArrivals(newArrivals);
          setSliderN2(sliderN2);
          videoPlayerUrlRef.current = videoPlayer.url;
          setComplements(complements);
          setFooterImages(footerImages);
          setIsLoading(false);
        }
      )
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
  return (
    <div>
      <Navbar />
      <div className="swiper">
        <h1>New Collections</h1>
        <Slider testData={newCollectionsItems} withImages={true} />
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
        <VideoPlayer
          url={videoPlayerUrlRef.current}
          width={1080}
          height={640}
          controls={true}
        />
      </div>

      <div className="text_slider">
        <h3 className="slider_title">WE LOVE GOOD COMPLIMENT</h3>
        <Slider testData={complements} withImages={false}></Slider>
      </div>
      <SignUp />
      <Footer footerImages={footerImages} />
    </div>
  );
}
