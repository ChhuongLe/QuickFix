import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  .navBar{
    font-size: 40px;
  }
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
margin-left: 67%;
margin-top: -4%;
.nav{
  background-color: transparent;
  border: none;
  font-size: 20px;
  :hover {
    cursor: pointer;
    color: gray;
    transition: 0.3s;
    text-decoration: underline;
  }
}
`;

const Navbar = () => {
  const [page, setPage] = useState('');

  return (
    <div>
      <Container>
        <div className="navBar">
          <span>QuickFix</span>
        </div>
      </Container>
      <ButtonContainer>
        <button className="nav">Recipes</button>
        <p className="line"> | </p>
        <button className="nav">Make somethin'?</button>
        <p className="line"> | </p>
        <button className="nav">Contact Us</button>
      </ButtonContainer>
    </div>


  );
};

export default Navbar;
