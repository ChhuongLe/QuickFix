import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Ingredients from './Ingredients';

const Container = styled.div`
  background-color: #77DD77;
  height: 100vh;
  width: 100vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }

  render() {
    return (
      <Container>
        <Banner />
        <Ingredients />
      </Container>
    );
  }
}

export default App;
