import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import { useState } from "react";


function App() {

  const [display, setDisplay] = useState(['about', 'help']);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage display={display} setDisplay={setDisplay} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

