import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCamera, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const NavbarHead = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faSearch} />
                  </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                <FontAwesomeIcon icon={faMapSigns} />
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='flex-container' href="">
                <FontAwesomeIcon icon={faCamera} />
                <NavbarText>Trouve un jouet</NavbarText>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText><a href='https://github.com/Signupz' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a></NavbarText>
      </Navbar>
    </div>
  );
}

export default NavbarHead;
