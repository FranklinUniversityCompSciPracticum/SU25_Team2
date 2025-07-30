import React from 'react';
import './Hero.css';
import videoFile from '../Assets/paradise.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <video
          className="hero-video"
          src={videoFile}
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          width="100%"
          height="100%"
        />
        

        <p className="hero-text">Welcome To Paradise</p>

        <div className="hero-buttons">
          <a href="#popular" className="hero-button">Explore Popular Items</a>
          <a href="#new-collections" className="hero-button">Newest Collections</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
