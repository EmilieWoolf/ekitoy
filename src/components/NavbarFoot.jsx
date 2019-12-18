import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from "react-router-dom";

const NavbarFoot = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/">
                    <Link className='flex-container' to="/">
                        <FontAwesomeIcon icon={faHome} />
                        <NavbarText>Accueil</NavbarText>
                    </ Link>
                </NavLink>
                </NavItem>
            <NavItem>
                <NavLink className='flex-container' href="/new-article">
                    <FontAwesomeIcon icon={faPlusCircle} />
                    <NavbarText>Vendre</NavbarText>
                    </NavLink>
                </NavItem>
            <NavItem>
              <NavLink className='flex-container' href="/messages">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <NavbarText>Message</NavbarText>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='flex-container' href='/profile'>
                  <FontAwesomeIcon icon={faUser} />
                  <NavbarText>Profil</NavbarText>
                </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarFoot;
