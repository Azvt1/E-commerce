import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import "./Homepage.css"

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ServiceCards />
        <Categories />
      </div>
    </div>
  );
}
