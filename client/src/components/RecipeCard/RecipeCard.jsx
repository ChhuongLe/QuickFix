import React, { useState } from 'react';
import {
  CardContainer,
  StyledHeading,
  StyledImage,
  ModalBackground,
  Modal,
  Recipe,
  ExitButton,
  LinkUrl } from './RecipeCardElements.js';
import noImage from '../../image/notAvailable.gif';

const RecipeCard = ({ recipe }) => {
  const [shown, setShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const recipeTitle = recipe.title;
  const recipeImg = recipe.image;
  const recipeURL = recipe.sourceUrl;
  const recipeServing = recipe.servings;
  const recipePrice = recipe.pricePerServing;
  const recipeTime = recipe.readyInMinutes;

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
      <StyledImage src = {isValidImage(recipeImg)} onClick={()=>setShowModal(!showModal)}/>
      {shown && (
        <StyledHeading>{recipeTitle}</StyledHeading>
      )}
      {showModal && (
        <ModalBackground>

          <Modal>
            <ExitButton onClick={()=>{setShowModal(!showModal); setShown(false)}}>X</ExitButton>
            <Recipe>
              Number of servings: {recipeServing}<br/>
              Price per serving: {recipePrice}<br/>
              Time to make: {recipeTime} mins<br/>
              Recipe URL:  <LinkUrl href={recipeURL} target="blank">Link</LinkUrl>
            </Recipe>
          </Modal>
        </ModalBackground>
      )}
    </CardContainer>
  );
};

export default RecipeCard;
