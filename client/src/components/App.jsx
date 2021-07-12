import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Banner from './Banner';
import Ingredients from './Ingredients';
import Create from './Create';

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
      screen: 'loginScreen',
    };
    this.setLogin = this.setLogin.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  setLogin(value) {
    this.setState({
      screen: value,
    });
  }

  createAccount(value) {
    this.setState({
      screen: value,
    });
  }

  render() {
    const { screen } = this.state;
    if (screen === 'registerScreen') {
      return (
        <Container>
          <Create />
        </Container>
      );
    }
    if (screen === 'loginScreen') {
      return (
        <Container>
          <Login setLogin={this.setLogin} createAccount={this.createAccount} />
        </Container>
      );
    }
    return (
      <Container>
        <Banner />
        <Ingredients />
      </Container>
    );
  }
}

export default App;
