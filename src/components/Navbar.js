import React, { Component, useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className={`navbar ${scrolled ? "scrollednav" : ""}`}>
      <div className="container">
        <div className="Left">
          <img src="/logo.png" alt="MaRS Logo" className="logo" />
          <h1>MaRS</h1>
        </div>
        <div className="Right">
          <ul
            id="navbar"
            className={clicked ? "#navbar active" : "#navbar"}
          >
            <li className="item">
              <a href="/" className="c">
                Home
              </a>
            </li>
            <li className="item">
              <a href="#" className="c">
                Projects
              </a>
            </li>
            <li className="item">
              <a href="#" className="c">
                Gallery
              </a>
            </li>
            <li className="item ">
              <a href="/Teams" className="c">Teams</a>
            </li>
            <li>
              <div className="search-box">Blogs</div>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <a className="hamburg">
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
