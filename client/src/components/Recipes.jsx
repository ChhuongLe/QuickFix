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

const Recipes = ({recipes}) => {

  return (
    <div>Want something that might fit your fancy?</div>
  )
};

export default Recipes;
