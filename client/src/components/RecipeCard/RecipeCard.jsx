import React, { useState } from 'react';
import {
  CardContainer,
  StyledHeading,
  StyledImage } from './RecipeCardElements.js';
import noImage from '../../image/notAvailable.gif';

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  const recipeTitle = recipe.title;
  const recipeImg = recipe.image;
  const recipeURL = recipe.soruceURL;
  const recipeSummary = recipe.summary;

  // checks if there is a valid image
  const isValidImage = (image) => {
    if(!image){
      return image = noImage;
    }
    return image;
  }

  return(
    <CardContainer>
      <StyledHeading>{recipeTitle}</StyledHeading>
      <StyledImage src = {isValidImage(recipeImg)} />
      </CardContainer>
  );
};

export default RecipeCard;
