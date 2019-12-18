import React from 'react';
import Navbar from './components/navbar';
import Message from './components/Message';
import Association from './components/Association';
import './App.css';


function App() {
  return (
  
    <div className="App">
      <Association />
      <Navbar />
    </div>
  );
}

export default App;
