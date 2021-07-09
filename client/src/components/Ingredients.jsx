import React, { useState } from 'react';
import styled from 'styled-components';

// Improvment: Make it so there are more options
const Container = styled.div`
  display: grid;
  position: fixed;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  width: 40vw;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .box {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 1em;
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const Modal = styled.div`

`;
const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [aBox, setABox] = useState('+');
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (input) => {
    setIngredients(input);
    console.log(ingredients);
  };

  const handleClick = (event) => {
    const target = event.target.name;
    if (target === 'a') {
      setShowModal(!showModal);
    }
  };

  return (
    <Container>
      <button className="box" name="a" onClick={handleClick}>{aBox}</button>
      <button className="box" name="b">+</button>
      <button className="box" name="c">+</button>
      <button className="box" name="d">+</button>
      <button className="box" name="e">+</button>
      <button className="box" name="f">+</button>
    </Container>
  );
};

export default Ingredients;
