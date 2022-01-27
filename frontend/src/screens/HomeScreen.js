import React from "react";
import "./Homescreen.css";
import video from "../Assets/Videos/video5.mp4";

import { Link } from "react-router-dom";

//components
import Sponsors from "../components/Sponsors";

const HomeScreen = () => {
  return (
    <div className="homescreen__container">
      <div className="homescreen__div">
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        <h1 className="homescreen__title">
          {" "}
          Taking the intrepid into the Expanse{" "}
        </h1>
        <Link to="/shop">
          <button className="homescreen__shop__button">View Trips</button>
        </Link>
        <div className="homescreen__sponsorships">
          Proudly Sponsored By:
          <Sponsors />
        </div>
        <div className="homescreen__buttons">
          <Link to="/contact">
            <button className="homescreen__button">Contact Us</button>
          </Link>
          <Link to="/about" className="about__link">
            <button className="homescreen__button">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
