import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

// Improvment: Make it so there are more options
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100vw;
  height: 87vh;
  overflow:hidden;
  margin-top: 13px;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0px;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition-duration: 4s;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
  display: flex;
`;

const Recipes = (chickenRecipes) => {
  const [modal, setModal] = useState(false);

  const chickenArr = chickenRecipes.chickenRecipes;
  console.log(chickenArr);

  const recipeCards = chickenArr.map((element, index) => (
    <RecipeCard element={element} key={index} />
  ));

  return (
    <Container>
      {recipeCards}
    </Container>
  );
};

export default Recipes;
