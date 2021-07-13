import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 3em;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  poisition: relative;
  border-radius: 10px;
  flex-direciton: column;
  justify-content: center;
  margin-top: 100px;
  margin-left: 25%;
  width: 50vw;
  height: 40vh;
  background-color: #fff;
  padding: 20px;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  .username{
    font-size: 1.1em;
    padding: 12px;
  }
  .password{
    padding: 14px;
    font-size: 1.1em;
  }
  .textBox{
    padding: 10px;
  }
  .submit{
    padding: 10px;
    width: 25vw;
    background-color: rgb(234 162 162/ 0.7) ;
    border-radius: 20px;
    :hover {
      cursor: pointer;
      opacity: 0.8;
      transition: 5ms;
    }
  }
`;

const Login = ({ setScreen, createAccount }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = () => {
    setScreen('ingredientScreen');
    setLoggedIn(!loggedIn);
  };

  const handleCreate = () => {
    createAccount('registerScreen');
    setCreate(!create);
  };

  return (
    <div>
      <Header>Sign in</Header>
      <Container>
        <Form className="login" onSubmit={handleSubmit}>
          <div>
            <br />
            <br />
            <label className="username">Username: </label>
            <input className="textBox" type="username" placeholder="Username" required />
            <br />
            <br />
            <br />
            <br />
            <label className="password"> Password: </label>
            <input className="textBox" type="password" placeholder="Password" required />
            <br />
            <br />
            <button className="submit">Submit</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="message">Not Registered?</p>
            <button className="submit" onClick={handleCreate}>Create an account</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
