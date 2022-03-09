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

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  const recipeTitle = recipe.title;
  const recipeImg = recipe.image;
  const recipeURL = recipe.soruceURL;
  const recipeSummary = recipe.summary;

  return(
    <div>Yes</div>
  );
};

export default RecipeCard;
