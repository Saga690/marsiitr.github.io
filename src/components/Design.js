import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";

const CardsDetail = [
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    image: "robotics.avif",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
];

function Teams() {
  return (
    <>
      <Navbar />
      <div className="Teams">
        <div className="Heading">
          {" "}
          <h4>Our Designers</h4>
        </div>

        <div className="Members">
          {CardsDetail.map((Card, index) => (
            <div className="cards" key={index}>
              <img src={Card.image} alt={Card.name} />
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
