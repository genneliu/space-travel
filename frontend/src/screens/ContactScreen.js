import React, { useState } from "react";
import "./ContactScreen.css";

//components
import Footer from "../components/Footer";

const ContactScreen = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact__container">
      <div className="contact__page">
        <h2> We'd love to hear from you! </h2>
        <div className="contact__address">
          <h3> Star Silk Roads </h3>
          <p> Transport Union International </p>
          <p> 117 Sol Hall, Office #5, Medina Station </p>
        </div>
        <p> Fill out this form and someone will reach out shortly</p>
        <form onSubmit={handleSubmit} className="contact__form">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">{status}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactScreen;
