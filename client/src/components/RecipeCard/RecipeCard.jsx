import React, { useState } from 'react';
import {
  CardContainer,
  StyledHeading,
  StyledImage,
  ModalImage,
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
  const recipeInstructions = recipe.analyzedInstructions[0].steps;

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

  // ingredients list is a little confusing, will implement at a later time

  // let ingr = recipeInstructions.map((el,i)=>{ return el.ingredients[0] });
  // console.log(ingr);

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
        // add scroll to top functionality for QoL
        <ModalBackground>
          <Modal>
            <ExitButton onClick={()=>{setShowModal(!showModal); setShown(false)}}>X</ExitButton>
            <ModalImage src={recipeImg}/>
            <Recipe>
              <h3 style={{backgroundColor: "#A2A182"}}>Description:</h3>
              <ul style={{backgroundColor: "#FFF"}}>
                <li style={{backgroundColor: "#FFF"}}>Number of servings: {recipeServing}</li>
                <li style={{backgroundColor: "#FFF"}}>Price per serving: {recipePrice}</li>
                <li style={{backgroundColor: "#FFF"}}>Time to make: {recipeTime} mins</li>
                <li style={{backgroundColor: "#FFF"}}>Recipe URL:  <LinkUrl href={recipeURL} target="blank">Link</LinkUrl></li>
              </ul>
              <h3 style={{backgroundColor: "#A2A182"}}>Instructions:</h3>
              <ol style={{backgroundColor:"#FFF"}}>
                {recipeInstructions.map((el,i)=>{
                  return <li style={{backgroundColor: "#FFF"}} key={i}>{el.step}</li>
                })}
              </ol>
            </Recipe>
          </Modal>
        </ModalBackground>
      )}
    </CardContainer>
  );
};

export default RecipeCard;
