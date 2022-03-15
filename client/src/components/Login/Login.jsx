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
            <label className="username">Username: </label>
            <input className="textBox" type="username" placeholder="Username" onChange={handleChange} required />
            <label className="password"> Password: </label>
            <input className="textBox" type="password" placeholder="Password" required />
            <button className="submit">Submit</button>
            <p className="message">Not Registered?</p>
            <button className="submit" onClick={handleCreate}>Create an account</button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
