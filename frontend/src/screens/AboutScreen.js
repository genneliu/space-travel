import React from "react";
import video from "../Assets/Videos/video7.mp4";

//screens
import "./AboutScreen.css";

//components
import Footer from "../components/Footer";
import historyVideo from "../components/historyVideo";
import placesTab from "../components/placesTab";
import shipsTab from "../components/shipsTab";

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
          <h2>Places</h2>
          {/* tabs for the places? */}
          <placesTab />
          Ceres Mars Luna Belt
        </div>
        <div>
          <h2 className="about__ships">Ships</h2>
          <shipsTab />
          {/* tabs for ships */}
          Luxury types of ships; maybe even state of rooms?
        </div>
        <div className="about__credits">
          <p>
            <h2>Credits:</h2>
            Based on the show, the Expanse
            <br />
            Protomolecule Font:
            https://www.reddit.com/r/TheExpanse/comments/o9yk1d/protomolecule_font_062021/{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
