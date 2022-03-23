import React, { useState } from 'react';
import { RecipeContainer, Container } from './RecipeElements.js';
import { Header } from '../Login/LoginElements.js';
import styled from 'styled-components';
import RecipeCard from '../RecipeCard/RecipeCard';

// display popular recipes first
// allow user to


// given some recipes that are default to show
// map them into a recipe card to display in the recipes list
const Recipes = ({recipes}) => {

  const randoRecipes = recipes.map((recipe) =>(
    <RecipeCard recipe={recipe}/>
  ));

  return (
    <RecipeContainer>
      <Header style={{marginTop: "30px"}}>Recipes of the day: </Header>
      <Container>
        {randoRecipes}
      </Container>
      <Header>Personal Favorites: </Header>
      <Container>
        {randoRecipes}
      </Container>
    </RecipeContainer>

  )
};
export default Recipes;
