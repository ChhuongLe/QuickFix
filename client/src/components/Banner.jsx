import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
    display: flex;
    place-self: center;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  padding:40px;
`;

// Sytled components for banner

const Banner = () => (
  // TODO: Add photo for banner logo
  <RowContainer>
    <Title>What is in your fridge?</Title>
  </RowContainer>
);

export default Banner;
