import React, { useState } from "react";
import "./Cards.css";
import ParticlesComponent from '../particles.js';

const CardsDetail = [
  {
    background: "memberd.jpg",
    name: "JOE KROOS",
    por: "JOINT SECRETARY",
    titleclass: "Teams-members",
    vertical: "Electronics",
  },
  {
    background: "memberb.jpg",
    name: "LIZA PERRY",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "AI/ML",
  },
  {
    background: "membera.jpg",
    name: "HILIE ROSE",
    por: "SECRETARY",
    titleclass: "Teams-members",
    vertical: "Mechanical",
  },
  {
    background: "memberc.jpg",
    name: "JACK STOINIS",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "Web Development",
  },
  {
    background: "member4.jpg",
    name: "JOE",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "Design",
  },
  {
    background: "memberd.jpg",
    name: "HBIB",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "ROS",
  },
  {
    background: "memberb.jpg",
    name: "LIZA",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "Sponsorship",
  },
  {
    background: "membera.jpg",
    name: "HEALEY",
    por: "MEMBER",
    titleclass: "Teams-members",
    vertical: "Marketing",
  },
  {
    background: "memberc.jpg",
    name: "GIGA",
    por: "JOINT SECRETARY",
    titleclass: "Teams-members",
    vertical: "AI/ML",
  },
  // Add more members as needed...
];

const verticals = ["AI/ML", "Electronics", "Mechanical", "Web Development", "Design", "ROS", "Sponsorship", "Marketing"];

function Teams() {
  const [selectedVertical, setSelectedVertical] = useState(verticals[0]);

  return (
    <>
      <ParticlesComponent id="tsparticles" />
      <div className="Teams">
        <div className="Heading">
          <h4>Our Team</h4>
        </div>
        <div className="verts">
          <div className="vert-container">
            {verticals.map((vertical, index) => (
              <span
                key={index}
                className={selectedVertical === vertical ? 'active' : ''}
                onClick={() => setSelectedVertical(vertical)}
              >
                {vertical}
              </span>
            ))}
          </div>
        </div>
        <div className="Members">
          {CardsDetail.filter(card => card.vertical === selectedVertical).map((Card, index) => (
            <div className="cards" key={index}>
              <img src={Card.background} alt="" />
              <h2 className={Card.titleclass}>{Card.name}</h2>
              <p>{Card.por}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;
