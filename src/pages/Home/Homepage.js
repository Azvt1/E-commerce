import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Categories from "../../components/Categories/Categories";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import "./Homepage.css";
import { Slider } from "../../components/Slider/Slider";
import ladyInGlasses from "../../assets/img/LadyInGlasses.jpeg";
import guyInJacket from "../../assets/img/guyInJacket.jpeg";
import womanOnChair from "../../assets/img/womanOnChair.jpeg";
import ladyInJeans from "../../assets/img/ladyInJeans.jpeg";

export default function Homepage() {
  const slides = [
    {
      id: 1,
      image: ladyInGlasses,
      title: "OUT CROP SWEATER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio sapien, tincidunt ut blandit eu, luctus vitae nibh. Quisque consectetur porta cursus. Sed congue metus dolor, eu sodales orci interdum sit amet. Phasellus tortor urna, porttitor nec metus convallis, dignissim vehicula lorem. Pellentesque auctor orci eget eros auctor lobortis. Interdum.",
    },
    {
      id: 2,
      image: guyInJacket,
      title: "SOFT LEATHER JACKETS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam leo vitae elit faucibus fermentum. Proin bibendum elit quis porttitor suscipit. Pellentesque quis vehicula nunc",
    },
    {
      id: 3,
      image: womanOnChair,
      title: "COZY COATS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu turpis quis nulla aliquam suscipit vel vel dui. Fusce id mi metus. Mauris mollis, est",
    },
    {
      id: 4,
      image: ladyInJeans,
      title: "modern jeans",
      description:
        "Suspendisse sodales lorem sit amet nisl pulvinar venenatis. Aliquam vitae diam aliquam, auctor nunc eu, feugiat erat. Quisque arcu lorem, posuere sed dignissim sed, varius.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="swiper">
        <h1>New Collections</h1>
        <Slider slides={slides} />
      </div>
      <div>
        <div className="container">
          <ServiceCards />
          <Categories />
        </div>
      </div>
    </div>
  );
}
