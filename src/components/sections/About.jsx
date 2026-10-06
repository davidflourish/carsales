import React from 'react';
import './About.css'; 

function About() {
  return (
    <section id="about" className="about-section">
      
      <div className="about-images-container">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
          alt="Large car"
          className="about-big-image"
        />
        <img
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80"
          alt="Small car"
          className="about-small-image"
        />
      </div>

      <div className="about-content">
        <h2 className="about-heading">ABOUT SHOROOM</h2>
        <div className="about-underline"></div>

        <p className="about-paragraph">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <button className="about-button">
          Read More <span>→</span>
        </button>
      </div>

    </section>
  );
}

export default About;