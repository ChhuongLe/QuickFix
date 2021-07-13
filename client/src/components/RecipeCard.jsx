import React, {useState} from 'react';
import styled from 'styled-components';

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

const RecipeCard = ({ element }) => {
  const [modal, setModal] = useState(false);

  const recipeName = element.recipe.label;
  const image = element.recipe.image;
  const cusineType = element.recipe.cuisineType;
  const recipe = element.recipe.url;
  const calories = element.recipe.calories;
  const servingSize = element.recipe.yield;

  const caloriesPerServing = Math.floor(calories / servingSize);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <Container>
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
