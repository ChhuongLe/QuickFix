import React, { useState } from 'react';
import {
  CardContainer,
  StyledHeading,
  StyledImage } from './RecipeCardElements.js';
import noImage from '../../image/notAvailable.gif';

const RecipeCard = ({ recipe }) => {
  const [shown, setShown] = useState(false);

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

  const handleHover = () =>{
    setShown(!shown);
  }

  return(
    <CardContainer
    onMouseEnter={()=>setShown(true)}
    onMouseLeave={()=>setShown(false)}
    >
      <StyledImage src = {isValidImage(recipeImg)} />
      {shown && (
        <StyledHeading>{recipeTitle}</StyledHeading>
      )}
    </CardContainer>
  );
};

export default RecipeCard;
