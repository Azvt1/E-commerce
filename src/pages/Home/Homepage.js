import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}
