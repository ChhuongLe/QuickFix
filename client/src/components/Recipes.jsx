import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';

// display popular recipes first
// allow user to

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


// given some recipes that are default to show
// map them into a recipe card to display in the recipes list
const Recipes = ({recipes}) => {

  const randoRecipes = recipes.map((recipe) =>(
    <RecipeCard recipe={recipe}/>
  ));

  return (
    <>
      <div>Want something that might fit your fancy?</div>
      <div>{randoRecipes}</div>
    </>
  )
};
export default Recipes;
