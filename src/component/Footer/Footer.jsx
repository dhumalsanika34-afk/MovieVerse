import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>🎬 Movie App © 2026 | All Rights Reserved</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="https://github.com/your-username/movie-app" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://your-movie-app.netlify.app" target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
