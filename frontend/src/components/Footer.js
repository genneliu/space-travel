import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <h3> Frontier </h3>
      <p> Transport Union International </p>
      <p> 117 Sol Hall, Office #5, Medina Station </p>
      <Link to="/contact" className="contact__link">
        Contact Us
      </Link>
    </div>
  );
};

export default Footer;
