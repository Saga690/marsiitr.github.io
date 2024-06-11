import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (

    <div className="homepage">
        <Navbar />
      <main className="main-content">
        <div className="header-line">Heart of Robotics at R-Land</div>
        <h2>
          <span className="gradient-text">Models</span> and 
          <span className="gradient-text"> Robotics</span> Section, IIT Roorkee
        </h2>
        <p>We're a student group, bonded by our passion for Robotics. Delving into programming, electronics, and AI through projects and workshops.</p>
        <button>Our Team</button>
      </main>
    </div>
  );
};

export default Homepage;
