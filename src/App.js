import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Home";
import { useState } from "react";
import Cards from "./components/Card/Cards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [display, setDisplay] = useState(["about", "help"]);

  return (
    <>
    <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Homepage display={display} setDisplay={setDisplay} />}
            />
            <Route path="/Teams" element={<Cards />} />

            {/* <Route path="/Home" element={<Home />} /> */}
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}
export default App;
