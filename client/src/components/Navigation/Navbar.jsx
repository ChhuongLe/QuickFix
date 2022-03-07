import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Nav,
  NavLink,
  NavMenu,
  StyledImage } from './NavbarElements.js';
import Icon from '../../image/Icon.png';

const Navbar = ({ setScreen, userName }) => {

  return (
    <Nav>
      <NavLink to='/'><StyledImage src={ Icon }/></NavLink>
      <NavMenu>
        <NavLink to='/contact'>Contact Us</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
