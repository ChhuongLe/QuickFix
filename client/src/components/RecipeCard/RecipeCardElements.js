import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 15%;
  height: 225px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 14px;
  margin: 1rem;
  background-color: #BA6F4D;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  :hover {
    cursor: pointer;
  }
  .recipeName{
    font-size: 20px;
  }
  text-align: center;
`;

export const StyledHeading = styled.h3`
  background-color: #BA6F4D;
  font-size: 1em;
  color: white;
`;

export const StyledImage = styled.img`
  border-radius: 20px;
  max-width: 90%;
`;