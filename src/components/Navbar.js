import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  // const[showMediaIcons,setShowMediaIcons]= useState(false);
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="Left">
            <img src="/logo.png" alt="MaRS Logo" className="logo" />
            <h1>MaRS</h1>
          </div>
          <div className="Right">
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
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
            {/* <div className="hamburgmenu">
         <a href='#'>
          <GiHamburgerMenu />
         </a>
      </div> */}
            {/* onClick="() => setShowMediaIcons(!showMediaIcons)" */}
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <a className="hamburg">
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
