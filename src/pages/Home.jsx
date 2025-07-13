import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="home">
    <div className="banner">
      <h2>Your Smile, Our Passion</h2>
      <p>Experience top-quality dental care with comfort and trust.</p>
      <Link to="/contact" className="btn">Book Appointment</Link>
    </div>
    <div className="intro">
      <h3>Welcome to Smile Dental Clinic</h3>
      <p>We provide professional dental care with a personal touch.</p>
    </div>
  </section>
);

export default Home;
