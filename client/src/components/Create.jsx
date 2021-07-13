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
  .email {
    padding: 33px;
    font-size: 1.1 em;
  }
  .textBox{
    padding: 10px;
  }
  .submit{
    padding: 10px;
    width: 25vw;
    background-color: rgb(234 162 162/ 0.7) ;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const Create = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [create, setCreate] = useState(false);

  const handleChange = (event) => {
    const target = event.target
  }

  return (
    <div>
      <Header>Sign Up</Header>
      <Container>
        <Form className="signUp">
          <div>
            <br />
            <br />
            <label className="username">Username: </label>
            <input className="textBox" type="username" placeholder="Username" required onchange={handleChange}/>
            <br />
            <br />
            <br />
            <br />
            <label className="password"> Password: </label>
            <input className="textBox" type="password" placeholder="Password" required />
            <br />
            <br />
            <br />
            <br />
            <label className="email"> Email: </label>
            <input className="textBox" type="email" placeholder="Email" required />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className="submit">Submit</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Create;
