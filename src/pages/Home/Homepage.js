import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
import { Slider } from "../../components/Slider/Slider";

export default function Homepage() {
  const slides = [
    {
      id: 1,
      image: "../../img/LadyInGlasses.jpeg",
      title: "OUT CROP SWEATER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras odio sapien, tincidunt ut blandit eu, luctus vitae nibh. Quisque consectetur porta cursus. Sed congue metus dolor, eu sodales orci interdum sit amet. Phasellus tortor urna, porttitor nec metus convallis, dignissim vehicula lorem. Pellentesque auctor orci eget eros auctor lobortis. Interdum.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <h1>New Collections</h1>
      </div>
      <div className="swiper">
        <Slider slides={slides} />
      </div>
    </div>
  );
}
