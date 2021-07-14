import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  margin-top: 100px;
  margin-left: 25%;
  width: 50vw;
  height: 40vh;
  border-radius: 10px;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
`;

const StyledForm = styled.form`
  margin-left: 28%;
  .textBox {
    padding: 10px;
  }
  .email {
    padding: 2px;
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

const Contact = () => (
  <FormContainer>
    <StyledForm>
      <label>Name: </label>
      <input className="textBox" />
      <br />
      <br />
      <br />
      <label className="email">Email: </label>
      <input className="textBox" />
      <br />
      <br />
      <br />
      <label>Message: </label>
      <textarea className="area" height="30px" />
      <br />
      <br />
      <button className="submit">Submit</button>
    </StyledForm>
  </FormContainer>
);

export default Contact;
