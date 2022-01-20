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
      <h1 className="homescreen__title"> Visit the Expanse </h1>

      <Link to="/shop">
        <button className="homescreen__shop__button">View Trips</button>
      </Link>
      <Link to="/contact">
        <button className="homescreen__button">Contact Us</button>
      </Link>
      <Link to="/about" className="about__link">
        <button className="homescreen__button">About Us</button>
      </Link>
    </div>
  );
};

export default HomeScreen;
