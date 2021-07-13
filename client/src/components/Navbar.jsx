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

const Navbar = ({ setScreen }) => {
  const [page, setPage] = useState('');

  const handleClick = (event) => {
    const target = event.target.innerText;
    if (target === 'Recipes') {
      setScreen('recipesScreen');
      setPage('Recipes');
    }
    if (target === 'Home') {
      setScreen('homepage');
      setPage('Home');
    }
  };

  let button = (
    <button className="nav" name="recipes" onClick={handleClick}>Recipes</button>
  );

  if (page === 'Recipes') {
    button = (
      <button className="nav" name="home" onClick={handleClick}>Home</button>
    );
  }

  return (
    <div>
      <Container>
        <div className="navBar">
          <span>QuickFix</span>
        </div>
      </Container>
      <ButtonContainer>
        {button}
        <p className="line"> | </p>
        <button className="nav">Make somethin'?</button>
        <p className="line"> | </p>
        <button className="nav">Contact Us</button>
      </ButtonContainer>
    </div>


  );
};

export default Navbar;
