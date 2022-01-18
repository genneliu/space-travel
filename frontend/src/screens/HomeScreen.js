import React from "react";

import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1> Welcome </h1>
      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about" className="about__link">
        About Us
      </Link>
    </div>
  );
};

export default HomeScreen;
