import React from "react";
import "./Homescreen.css";
import backgroundVideo from "../Assets/Videos/video5.mp4";

import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="homescreen__div">
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <h1 className="BankGothicRegular">
        {" "}
        Bringing you to the brink of our stars{" "}
      </h1>

      <Link to="/shop">Shop</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about" className="about__link">
        About Us
      </Link>
    </div>
  );
};

export default HomeScreen;
