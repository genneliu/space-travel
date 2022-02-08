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
        <h2 className="contact__header"> We'd love to hear from you </h2>

        <form onSubmit={handleSubmit} className="contact__form">
          <p className="form__info">
            {" "}
            Fill out this form and someone will reach out shortly
          </p>
          <div className="form__fields">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" required />
          </div>
          <div className="form__fields">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required />
          </div>
          <br />
          <div className="form__fields">
            <label htmlFor="message" className="message__label">
              Message:{" "}
            </label>
            <textarea id="message" required />
          </div>
          <button type="submit" className="submit__button">
            {status}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactScreen;
