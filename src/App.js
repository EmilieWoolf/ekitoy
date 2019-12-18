import React from 'react';
import NavbarFoot from './components/NavbarFoot';
import NavbarHead from './components/NavbarHead';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarHead />
        <NavbarFoot />
      </div>

    </Router>
  );
}

export default App;
