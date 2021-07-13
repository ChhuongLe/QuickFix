import React, { useState } from 'react';
import styled from 'styled-components';

import Labels from './Labels';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 500px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 14px;
  margin: 1rem;
  background-color: #ffecbd;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  :hover {
    cursor: pointer;
  }
  .recipeName{
    font-size: 20px;
  }
`;

const Img = styled.img`
  border-radius: 10px;
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

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  position:fixed;
  border: solid;
  background-color: white;
  min-width: 30%;
  min-height:30%;
  padding: 2%;
  left: 50%;
  right: 50%;
  border-radius: 10px;
  transform: translate(-50%, 50%);
  .message {
    text-decoration: underline;
  }
`;

const RecipeCard = ({ element }) => {
  const [showModal, setShowModal] = useState(false);

  const recipeName = element.recipe.label;
  const image = element.recipe.image;
  // const healthLabels = element.recipe.healthLabels;
  const ingredients = element.recipe.ingredientLines;
  const cusineType = element.recipe.cuisineType;
  const recipe = element.recipe.url;
  const calories = element.recipe.calories;
  const servingSize = element.recipe.yield;

  const caloriesPerServing = Math.floor(calories / servingSize);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const arrayOfString = ingredients;
  const ingredient = arrayOfString.map((item, index) => (
    <Labels item={item} index={index} />
  ));

  let modal;

  if (showModal) {
    modal = (
      <Modal onClick={handleClick}>
        <StyledInformation>
          <span className="recipeName">
            Recipe Name: {recipeName}
          </span>
          <br />
          <span className="message">Ingredients: </span>
          <br />
          {ingredient}
        </StyledInformation>
      </Modal>
    );
  }

  return (
    <Container>
      {modal}
      <span className="recipeName">{recipeName}</span>
      <br />
      <Img src={image} onClick={handleClick} />
      <br />
      <br />
      <div className="information">
        <span className="cuisine">
          Cusine Type: {cusineType}
        </span>
        <br />
        <br />
        <span className="serving">
          serving size: {servingSize}
        </span>
        <br />
        <br />
        <span>
          Calories Per Serving: {caloriesPerServing}
        </span>
        <br />
        <br />
        <a href={recipe}>Recipe Here</a>
      </div>
    </Container>
  );
};

export default RecipeCard;
