import React, { useState } from 'react';
import {
  CardContainer,
  StyledHeading,
  StyledImage,
  ModalBackground,
  Modal } from './RecipeCardElements.js';
import noImage from '../../image/notAvailable.gif';

const RecipeCard = ({ recipe }) => {
  const [shown, setShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const recipeTitle = recipe.title;
  const recipeImg = recipe.image;
  const recipeURL = recipe.soruceURL;
  const recipeSummary = (recipe.summary);

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
    onClick={()=>setShowModal(!showModal)}
    >
      <StyledImage src = {isValidImage(recipeImg)} />
      {shown && (
        <StyledHeading>{recipeTitle}</StyledHeading>
      )}
      {showModal && (
        <ModalBackground>
          <Modal>{recipeSummary}</Modal>
        </ModalBackground>
      )}
    </CardContainer>
  );
};

export default RecipeCard;
