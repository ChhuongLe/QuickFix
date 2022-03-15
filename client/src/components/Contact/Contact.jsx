import React from 'react';
import { FormContainer, StyledForm } from './ContactElements';



const Contact = () => (
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
      <textarea className="area" rows="5" cols="25"/>
      <br />
      <br />
      <button className="submit">Submit</button>
    </StyledForm>
  </FormContainer>
);

export default Contact;
