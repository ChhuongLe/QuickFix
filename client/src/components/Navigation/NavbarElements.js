import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.div`
  background: #F4ECE2;
  height: 120px;
  display flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  background: #F4ECE2;
  display: flex;
  cursor: pointer;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none !important;
  color: black;
  &.active {
    color: #849483;
  }
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50px;
  margin-left: 10px;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: start;
  z-index: 100;
  align-items: center;
  margin-left: 150px;
  @media screen and (max-width: 780px){
    display:block;
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 58%;
  width: 100%;
  background-color: #000;
  height: 300px;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 768px){
    display: block;
    cursor: pointer;
  }
`;