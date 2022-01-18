import React from "react";
import { Link } from "react-router-dom";

//css
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <h3> Star Silk Roads </h3>
      <h4> Taking the intrepid into the Expanse </h4>
      <p> Transport Union International </p>
      <p> 117 Sol Hall, Office #5, Medina Station </p>
      <Link to="/contact" className="contact__link">
        Contact
      </Link>
      <Link to="/about" className="about__link">
        About Us
      </Link>
    </div>
  );
};

export default Footer;
