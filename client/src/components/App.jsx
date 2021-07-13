import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Recipes from './Recipes';
import Create from './Create';
import axios from 'axios';

const Container = styled.div`
  background-color: #77DD77;
  height: 100vh;
  width: 100vw;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chickenRecipies: [],
      screen: 'loginScreen',
    };
    this.setScreen = this.setScreen.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.getChickRecipes = this.getChickRecipes.bind(this);
  }

  componentDidMount() {
    this.getChickRecipes();
  }

  getChickRecipes() {
    axios.get('/chicken')
      .then((res) => {
        this.setState({
          chickenRecipies: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setScreen(value) {
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
    const { screen, chickenRecipies } = this.state;
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
          <Login setScreen={this.setScreen} createAccount={this.createAccount} />
        </Container>
      );
    }
    if (screen === 'recipesScreen') {
      return (
        <Container>
          <Recipes chickenRecipies={this.chickenRecipies} />
        </Container>
      );
    }
    return (
      <Container>
        <Navbar setScreen={this.setScreen} />
        <Homepage />
      </Container>
    );
  }
}

export default App;
