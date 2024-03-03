import Navbar from "../../components/Navbar/Navbar";
import "./About.css";

import lady from "../../assets/img/girl_wearing_a_short_dress_walking_city-wallpaper-1280x960.jpg";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import AboutUsInfo from "../../components/AboutUsInfo/AboutUsInfo";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="About_us_picture_container">
        <img src={lady} alt=""></img>
        <p className="abt">ABOUT &nbsp; US</p>
      </div>
      <div className="container">
        <ServiceCards />
        <AboutUsInfo />
      </div>
    </div>
  );
}
