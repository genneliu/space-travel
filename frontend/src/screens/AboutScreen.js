import React from "react";

//video
import historyVideo from "../Assets/Videos/video7.mp4";

//screens
import "./AboutScreen.css";

//components
import Footer from "../components/Footer";
import Credits from "../components/Credits";

const AboutScreen = () => {
  return (
    <div className="about__container">
      <div className="about__screen__top">
        <h1 className="about__header__text">About Us</h1>
      </div>
      <div className="about__video__div">
        <video autoPlay loop muted id="video__history">
          <source src={historyVideo} type="video/mp4" />
        </video>
        <h2 className="once__upon">
          {" "}
          Once upon a time, the stars were out of humanity's grasp{" "}
        </h2>
      </div>
      <br />
      <div className="about__text">
        <p>
          Thanks to the creation of the
          <a
            href="https://expanse.fandom.com/wiki/Epstein_Drive#:~:text=The%20Epstein%20Drive%20is%20a,belt%20and%20the%20outer%20planets."
            target="_blank"
          >
            {" "}
            Epstein Drive
          </a>
          , humanity was able to explore the stars
        </p>
      </div>
      <div className="about__places">{/* tabs for the places? */}</div>
      <div>{/* tabs for ships */}</div>
      <div className="about__credits">
        <Credits />
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default AboutScreen;
