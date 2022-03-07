import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const Nav = styled.div`
  background: #bbc3d4;
  height: 120px;
  display flex;
`;

export const NavLink = styled(Link)`
  background: #bbc3d4;
  display: flex;
  cursor: pointer;
  height: 100%;
  text-decoration: none !important;
  &.active {
    color: #E39774;
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
  margin-left: 150px;
`;