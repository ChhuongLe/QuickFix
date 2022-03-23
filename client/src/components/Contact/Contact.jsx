import React from 'react';
import { Header } from '../Login/LoginElements.js';
import { FormContainer, StyledForm } from './ContactElements';



const Contact = () => (
  <div>
    <Header>Contact Me!</Header>
    <FormContainer>
      <StyledForm>
      <label className="label">Name: </label>
      <input className="textBox" />
      <br />
      <br />
      <br />
      <label className="label">Email: </label>
      <input className="textBox" />
      <br />
      <br />
      <br />
      <label className="label">Message: </label>
      <textarea placeholder="Questions and feedback are appreciated!" className="area" rows="5" cols="25"/>
      <br />
      <br />
      <button className="submit">Submit</button>
    </StyledForm>
  </FormContainer>
  </div>
);

export default Contact;
