import styled from 'styled-components';

export const Header = styled.div`
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 3em;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direciton: column;
  justify-content: center;
  background-color: #FFF;
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