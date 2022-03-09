import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Banner = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
`;

export const BannerImg = styled.img`
  width: 100%;
  filter: brightness(70%);
`;

export const BannerText = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100px;
  width: 300px;
  padding: 20px 0px 20px 0px;
  border-radius: 10px;
  position: absolute;
  color: white;
  font-family: 'Marck Script', cursive;
  font-size: 45px;
  top: 40%;
  bottom: 60%;
  cursor: pointer;
`;