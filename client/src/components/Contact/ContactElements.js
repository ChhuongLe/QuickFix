import styled from 'styled-components';

export const FormContainer = styled.div`
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

export const StyledForm = styled.form`
  background-color: #FFF;
  .textBox {
    padding: 10px;
    background-color: #FFF;
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
  .area{
    background-color: #FFF;
  }
  .label{
    background-color: #FFF;
    display: inline-block;
    width: 100px;
  }
`;