import React, { useState } from 'react';
import { Header } from './LoginElements.js';
import { FormContainer, StyledForm } from '../Contact/ContactElements.js';

const Login = ({ setScreen, createAccount, setUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [create, setCreate] = useState(false);

  const handleSubmit = () => {
    setScreen('homePage');
    setLoggedIn(!loggedIn);
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
    setUser(userName);
  };

  return (
    <div>
      <Header>Sign in</Header>
      <FormContainer>
        <StyledForm className="login" onSubmit={handleSubmit}>
            <label className="label">Username: </label>
            <input className="textBox" type="username" placeholder="Username" onChange={handleChange} required />
            <br />
            <br />
            <br />
            <label className="label"> Password: </label>
            <input className="textBox" type="password" placeholder="Password" required />
            <br />
            <br />
            <br />
            <button className="submit">Submit</button>
            {/* <p className="message">Not Registered?</p>
            <button className="submit" onClick={handleCreate}>Create an account</button> */}
        </StyledForm>
      </FormContainer>
    </div>
  );
};

export default Login;
