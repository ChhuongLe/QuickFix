import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Login from './Login';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Recipes from './Recipes';
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
      chickenRecipes: [],
      screen: 'loginScreen',
    };
    this.setScreen = this.setScreen.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.getChickenRecipes = this.getChickenRecipes.bind(this);
  }

  componentDidMount() {
    this.getChickenRecipes();
  }

  getChickenRecipes() {
    axios.get('/chicken')
      .then((res) => {
        this.setState({
          chickenRecipes: res.data,
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
    const { screen, chickenRecipes } = this.state;
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
          <Navbar setScreen={this.setScreen} />
          <Recipes chickenRecipes={chickenRecipes} />
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
