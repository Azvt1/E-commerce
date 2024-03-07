import Navbar from "../../components/Navbar/Navbar";
import "./About.css";

import lady from "../../assets/img/girl_wearing_a_short_dress_walking_city-wallpaper-1280x960.jpg";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";

import { useState, useEffect } from "react";
import { getItems } from "../../service/api";

import Footer from "../../components/Footer/Footer";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";

export default function About() {
  const [footerItems, setFooterItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([getItems("footer")])
      .then(([footerItems]) => {
        setFooterItems(footerItems);
        if (footerItems.length > 0) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  });

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
      <HeaderForPages image={lady} text={"ABOUT   US"} />
      <div className="container">
        <ServiceCards />
        <AboutUsInfo />
      </div>
      <Footer footerImages={footerItems} />
    </div>
  );
}
