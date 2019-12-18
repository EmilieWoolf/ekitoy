import React from 'react';
import NavbarFoot from './components/NavbarFoot';
import NavbarHead from './components/NavbarHead';
import DescriptionArticle from './components/DescriptionArticle';
import ProfilUtilisateur from './components/ProfilUtilisateur';
import Portemonnaie from './components/Portemonnaie';
import Association from './components/Association';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarHead />        
        <DescriptionArticle />
        <ProfilUtilisateur />
        <Portemonnaie />
        <Association />
        <NavbarFoot />
      </div>
    </Router>
  );
}

export default App;
