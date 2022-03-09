import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.div`
  background: #F4ECE2;
  height: 120px;
  display flex;
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
  align-items: center;
  margin-left: 150px;0
`;