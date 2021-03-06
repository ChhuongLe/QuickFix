import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  :hover{
    cursor: pointer;
  }
  height: 1em;
  width: 100%;
`;

export const StyledHeading = styled.div`
  font-size: 1em;
  color: white;
  background: rgba(0,0,0,0);
  position: absolute;
  width: 20%;
  overflow-wrap: normal;
`;

export const StyledImage = styled.img`
  max-width: 95%;
  transition: 0.25s ease-in-out;
  :hover{
    transition: 0.25s ease-in-out;
    filter: brightness(65%);
    transform: scale(1.5);
  }
`;

export const ModalImage = styled.img`
  max-width: 30%;
`;

export const ModalBackground = styled.div`
  display: flex;
  z-index: 10;
  flex-direction: column;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  rigth: 0;
  height: 100vh;
  width: 100%;
  transition-duration: 4s;
  :hover{
    pointer: none;
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: Column;
  z-index: 10;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100vh;
  padding: 20px;
  background-color: #FFF;
  transform: translate(50%, 0%);
  transition: 0.25s ease-in-out;
  overflow: scroll;
  border-radius: 20px;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 20px;
`;

export const ExitButton = styled.button`
  background-color: #F4ECE2;
  border: none;
  background: none;
  :hover{
    cursor: pointer;
  }
  position: fixed;
  left: 96%;
  top: 1%;
`;

export const LinkUrl = styled.a`
  background-color: #FFF;
  display: inline;
`;