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
justify-content: right;
margin-left: 55%;
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
  .userName{
    font-size: 20px;
  }
}
`;

const Navbar = ({ setScreen, userName }) => {
  const [page, setPage] = useState('');
  console.log(userName);

  const handleClick = (event) => {
    const target = event.target.innerText;
    console.log(target);
    if (target === 'Recipes') {
      setScreen('recipesScreen');
      setPage('Recipes');
    }
    if (target === 'Home') {
      setScreen('homepage');
      setPage('Home');
    }
    if (target === 'Make somethin\'?') {
      setScreen('maker');
      setPage('Maker');
    }
    if (target === 'Contact Us') {
      setScreen('contact');
      setPage('Contact');
    }
  };

  let buttons = (
    <ButtonContainer>
      <p className="username">Welcome Back, {userName}</p>
      <p className="line"> | </p>
      <button className="nav" name="recipes" onClick={handleClick}>Recipes</button>
      <p className="line"> | </p>
      <button className="nav" name="maker" onClick={handleClick}>Make somethin'?</button>
      <p className="line"> | </p>
      <button className="nav" name="contact" onClick={handleClick}>Contact Us</button>
    </ButtonContainer>
  );

  if (page === 'Recipes') {
    buttons = (
      <ButtonContainer>
        <p className="username">Welcome Back, {userName}</p>
        <p className="line"> | </p>
        <button className="nav" name="home" onClick={handleClick}>Home</button>
        <p className="line"> | </p>
        <button className="nav" name="maker" onClick={handleClick}>Make somethin'?</button>
        <p className="line"> | </p>
        <button className="nav" name="contact" onClick={handleClick}>Contact Us</button>
      </ButtonContainer>
    );
  } else if (page === 'Maker') {
    buttons = (
      <ButtonContainer>
        <p className="username">Welcome Back, {userName}</p>
        <p className="line"> | </p>
        <button className="nav" name="home" onClick={handleClick}>Home</button>
        <p className="line"> | </p>
        <button className="nav" name="recipes" onClick={handleClick}>Recipes</button>
        <p className="line"> | </p>
        <button className="nav" name="contact" onClick={handleClick}>Contact Us</button>
      </ButtonContainer>
    );
  } else if (page === 'Contact') {
    buttons = (
      <ButtonContainer>
        <p className="username">Welcome Back, {userName}</p>
        <p className="line"> | </p>
        <button className="nav" name="home" onClick={handleClick}>Home</button>
        <p className="line"> | </p>
        <button className="nav" name="recipes" onClick={handleClick}>Recipes</button>
        <p className="line"> | </p>
        <button className="nav" name="maker" onClick={handleClick}>Make somethin'?</button>
      </ButtonContainer>
    );
  }

  return (
    <div>
      <Container>
        <div className="navBar">
          <span>QuickFix</span>
        </div>
      </Container>
      {buttons}
    </div>


  );
};

export default Navbar;
