import React, { useState } from 'react';
import styled from 'styled-components';

// Improvment: Make it so there are more options
const Container = styled.div`
  display: grid;
  position: relative;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  .box {
    background-color: #fff;
    border-radius: 5px;
    padding: 40px;
    font-size: 2em;
    max-height: 10vh;
    max-width: 10vw;
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
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

const Form = styled.form`
  border-radius: 22px;
  background-color: white;
  min-width: 30%;
  min-heigh: 30%;
  left: 50%;
  top: 50%;
  padding: 20px;
  position: fixed;
  transform: translate(-50%, -50%);
  opacity: 0.9;
  width: 50%;
  height: 50%;
`;

const SytledButton = styled.button`
  z-index: 2;
  position: fixed;
  font-size: 3em;
  padding: 10px 10px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const RowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content:center;
  font-size: 3em;
  background-color: #FF5A60;
  border-radius: 5px;
  .centered {
  }
`;

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('+');
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (input) => {
    input.preventDefault();
    setIngredients(input);
    setShowModal(!showModal);
    console.log(ingredients);
  };

  const handleClick = (event) => {
    const target = event.target.name;
    if (target === 'add') {
      setShowModal(!showModal);
    }
  };

  const displayModal = () => {
    setShowModal(!showModal);
  };

  let modal;

  if (showModal) {
    modal = (
      <Modal>
        <Form onSubmit={handleSubmit}>
          <SytledButton onClick={displayModal}>x</SytledButton>
          <RowContainer className="centered">Input Ingredient</RowContainer>
          <input placeholder="ingredient" onChange={(e) => setName(e.target.value)} />
          <br />
          <button >Submit</button>
        </Form>
      </Modal>
    );
  }

  return (
    <>
      {modal}
      <Container>
        <button className="box" name="add" onClick={handleClick}>{name}</button>
      </Container>
    </>
  );
};

export default Ingredients;
