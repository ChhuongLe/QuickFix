import React, { useState } from 'react';
import { Header, Container, Form } from './LoginElements.js';

const Login = ({ setScreen, createAccount, setUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = () => {
    setScreen('homePage');
    setLoggedIn(!loggedIn);
  };

  const handleCreate = () => {
    createAccount('registerScreen');
    setCreate(!create);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
    setUser(userName);
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
            <input className="textBox" type="username" placeholder="Username" onChange={handleChange} required />
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
