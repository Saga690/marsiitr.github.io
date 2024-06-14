import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar'

const cardsData = [
  {
    title: 'Electronics',
    image: 'electronics.jpg',
    description: 'The Electronics team specializes in designing and building the electronic systems for our projects. Members gain hands-on experience with circuit design, microcontroller programming, and sensor integration, turning creative ideas into functional models and robots.',
    titleClass: 'electronics-title'
  },
  {
    title: 'AI/ML',
    image: 'aiml.jpg',
    description: 'The AI/ML team focuses on integrating artificial intelligence and machine learning into our projects. Members explore algorithms, data analysis, and model training to create intelligent robots and systems, enhancing their skills in cutting-edge technologies.',
    titleClass: 'aiml-title'
  },
  {
    title: 'Mechanical',
    image: 'mechanical.jpg',
    description: 'The Mechanical team is dedicated to designing and constructing the physical structures of our projects. Members work on CAD modeling, 3D printing, and mechanical assembly, gaining practical skills to bring innovative robotic designs to life.',
    titleClass: 'mechanical-title'
  },
  {
    title: 'Robotics',
    image: 'robotics.avif',
    description: 'The Robotics team focuses on building and programming robots. Members collaborate on projects involving system integration, autonomous navigation, and control systems, developing hands-on skills in robotics engineering and innovation.',
    titleClass: 'robotics-title'
  },
  {
    title: 'Marketing',
    image: 'marketing.jpg',
    description: 'The Marketing team promotes our projects and events. Members develop strategies for competitions, outreach, manage social media, and create promotional materials, enhancing their skills in communication, branding, and public relations.',
    titleClass: 'marketing-title'
  },
  {
    title: 'Web Development',
    image: 'webdev.jpg',
    description: 'The Web Development team focuses on creating and maintaining our online presence. Members design and develop the club website, manage content, and ensure seamless user experience, honing their skills in web technologies and digital communication.',
    titleClass: 'robotics-title'
  },
  {
    title: 'Design',
    image: 'design.jpg',
    description: 'The Design Team focuses on creating visual content for promotional and presentation purposes. Members work on graphic design, branding, and multimedia, ensuring our projects are effectively showcased and visually appealing.',
    titleClass: 'robotics-title'
  }
];

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
      <br />
      <h4>Our Verticals</h4>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h3 className={card.titleClass}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
