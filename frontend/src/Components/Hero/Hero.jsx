 import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to Our Site</h1>
      <p>
        Explore our features and join our community for the latest updates and resources.
      </p>
      <button>Learn More</button>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Hero"
      />
    </section>
  )
}

export default Hero;
