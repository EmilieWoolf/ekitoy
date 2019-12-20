import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlusCircle, faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToyList from './ToyList';
import DescriptionArticle from './DescriptionArticle';
import Search from './search.jsx';
import NewToyForm from './NewToyForm.jsx';
import Message from './Message.js';
import Home from './Home'
import ProfilUtilisateur from './ProfilUtilisateur.js';


const Navbar = () => {
  return (
    <Router>
        <div>
            <Nav className="StickyNavbar">
                <NavItem>
                    <NavLink><Link to="/home"><FontAwesomeIcon className="icon" icon={faHome} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/search"><FontAwesomeIcon className="icon" icon={faSearch} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/vendre"><FontAwesomeIcon className="iconSup" icon={faPlusCircle} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/message"><FontAwesomeIcon className="icon" icon={faEnvelope} /></Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/profil"><FontAwesomeIcon className="icon" icon={faUserAlt} /></Link></NavLink>
                </NavItem>
            </Nav>
            <Switch>
                <Route path="/home">
                    <ToyList />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/vendre">
                    <NewToyForm />
                </Route>
                <Route path="/message">
                    <Message />
                </Route>
                <Route path="/profil">
                    <ProfilUtilisateur />
                </Route>
                <Route path="/toys/:toyId">
                    <DescriptionArticle />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}


export default Navbar;