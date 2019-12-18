import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlusCircle, faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DescriptionArticle from './DescriptionArticle';
// import Home from './components/home.js';
// import Search from './components/search.js';
// import Sell from './components/sell.js';
// import Message from './components/message.js';
// import Profil from './components/profil.js';

const Navbar = () => {
  return (
    <Router>
        <div>
            <Nav className="StickyNavbar">
                <NavItem>
                    <NavLink href="#"><Link to="/home"><FontAwesomeIcon className="icon" icon={faHome} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Link to="/search"><FontAwesomeIcon className="icon" icon={faSearch} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Link to="/sell"><FontAwesomeIcon className="iconSup" icon={faPlusCircle} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Link to="/message"><FontAwesomeIcon className="icon" icon={faEnvelope} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Link to="/profil"><FontAwesomeIcon className="icon" icon={faUserAlt} /></Link></NavLink>
                </NavItem>
            </Nav>
            <Switch>
                {/* <Route path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/sell">
                    <Sell />
                </Route>
                <Route path="/message">
                    <Message />
                </Route> */}
                <Route path="/profil">
                    <DescriptionArticle />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default Navbar;