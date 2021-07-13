import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

// Improvment: Make it so there are more options
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  right: 0;
  left: 0;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  width: 50vw;
  height: 40vh;
  background-color: white;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  .player{
    margin-left: 18%;
    margin-top: 70px;
  }
  .message{
    margin-left: 20%;
    margin-bottom: 20%;
  }
`;

const Header = styled.h1`
  left:0;
  right:0;
  margin-left: 45%;
  margin-right: 50%;
  margin-top: 20px;
  width: 50vw;
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
  min-height: 30%;
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

const recipes = () => {
  const [ingredients, setIngredients] = useState([]);
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
      <Header>Home page</Header>
      <Container>
        <ReactPlayer className="player" url="https://www.youtube.com/watch?v=9i4SKHbhbqk" width="416px" height="300px" />
        <br />
        <br />
        <div className="message">Fast Food Done Right with Gordon Ramsay</div>
      </Container>
    </>
  );
};

export default recipes;
