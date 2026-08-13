import React from "react";
import "./Contact.css"; // Importing CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-info">
        Have questions or feedback about My Trip Planner? We’d love to hear from you!
      </p>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Write your message..." required></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
