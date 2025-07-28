import React from 'react';
import './Hero.css';
import paradise from '../Assets/paradise.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <div className='hero-img'><img src={paradise} alt="Paradise" /></div>
        
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
