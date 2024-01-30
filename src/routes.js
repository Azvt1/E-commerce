import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Home/Homepage";
import { About } from "./pages/About/About";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Routes;
