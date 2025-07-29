import React from 'react';
import './Hero.css';
import paradise from '../Assets/paradise.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <img src={paradise} alt="Paradise" />
        
        {/* Text on top of the image */}
        <p className="hero-text">Welcome To Paradise</p>

        
        {/* Buttons placed over the image */}
        <div className="hero-buttons">
          <a href="#popular" className="hero-button">Explore Popular Items</a>
          <a href="#new-collections" className="hero-button">Newest Collections</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
