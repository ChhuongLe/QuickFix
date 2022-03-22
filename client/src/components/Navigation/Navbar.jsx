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
        <NavLink to ='/recipes'>Recipes </NavLink>
        <NavLink to='/contact'> Contact Us</NavLink>
        <NavLink to='/dish'>Create a Dish</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
