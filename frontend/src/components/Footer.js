import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {" "}
      <Link to="/contact" className="contact__link">
        Contact Us
      </Link>
    </div>
  );
};

export default Footer;
