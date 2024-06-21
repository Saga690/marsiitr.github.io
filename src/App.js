import React from 'react';
import Homepage from './components/Home';
import {useState} from "react";

function App() {

  const [display, setDisplay] = useState(['about', 'help']);

  return (
    <div className="App">
      <Homepage display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;

