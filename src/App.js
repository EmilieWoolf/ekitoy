import React from 'react';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
