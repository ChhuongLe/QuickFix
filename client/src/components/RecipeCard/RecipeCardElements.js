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

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  `;