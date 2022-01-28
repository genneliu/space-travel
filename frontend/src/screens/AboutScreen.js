import React from "react";
import video from "../Assets/Videos/video7.mp4";

//screens
import "./AboutScreen.css";

//components
import Footer from "../components/Footer";
import historyVideo from "../components/historyVideo";
import placesTab from "../components/placesTab";
import shipsTab from "../components/shipsTab";
import Credits from "../components/Credits";

const AboutScreen = () => {
  return (
    <div className="about__container">
      <div className="about__screen">
        <h1>About Us</h1>
        <br />
        <h2> Once upon a time... </h2>
        <h2> The stars were out of humanity's grasp </h2>
        <p> Thanks to the creation of the Epstein Drive... </p>
        <div className="about__video">
          <historyVideo />
        </div>
        <div className="about__places">
          {/* tabs for the places? */}
          <placesTab />
        </div>
        <div>
          <shipsTab />
          {/* tabs for ships */}
        </div>
        <div className="about__credits"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
