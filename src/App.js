import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Association from './components/Association';
import Portemonnaie from './components/Portemonnaie';


function App() {
  return (
  
    <div className="App">
      <Portemonnaie/>
      <Navbar />
    </div>
  );
}

export default App;
