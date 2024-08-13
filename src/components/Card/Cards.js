import React from "react";
import "./Cards.css";

const CardsDetail = [
  {
    background: "memberd.jpg",
    name: "JOE KROOS",
    por: "JOINT SECRETARY",
    titleclass: "Teams-members",
  },
  {
    background: "memberb.jpg",
    name: "LIZA PERRY",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "membera.jpg",
    name: "HILIE ROSE",
    por: "SECRETARY",
    titleclass: "Teams-members",
  },
  {
    background: "memberc.jpg",
    name: "JACK STOINIS",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "member4.jpg",
    name: "JOE ",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "memberd.jpg",
    name: "HBIB",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "memberb.jpg",
    name: "LIZA",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "membera.jpg",
    name: "HEALEY",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "memberc.jpg",
    name: "GIGA",
    por: "JOINT SECRETARY",
    titleclass: "Teams-members",
  },
  {
    background: "member4.jpg",
    name: "DIAZ",
    por: "MEMBER",
    titleclass: "Teams-members",
  },
  {
    background: "membera.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "memberc.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "memberb.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "membera.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "member.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "member.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "member.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
  {
    background: "member.jpg",
    name: "abcd",
    por: "xyz",
    titleclass: "Teams-members",
  },
];

function Teams() {
  return (
    <>
      <div className="Teams">
        <div className="Heading">
          <h4>Our Team</h4>
        </div>
        <div className="verts">
          <div className="vert-container">
            <span>AI/ML</span>
            <span>Electronics</span>
            <span>Mechanical</span>
            <span>Web Development</span>
            <span>Sponsorship</span>
            <span>Marketing</span>
          </div>
        </div>
        <div className="Members">
          {CardsDetail.map((Card, index) => (
            <div className="cards" key={index}>
              <img src={Card.background} alt="" />
              {/* background  ={Card.background} */}
              {/* <div className="text"> */}
              {/* {Card.background} =  {CardsDetail.background} */}
              {/* <div className="text">  */}
              <h2 className={Card.titleclass}>{Card.name}</h2>
              {/* <div className="line"></div> */}
              <p>{Card.por}</p>

              {/* </div> */}

              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;
