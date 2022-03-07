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
  filter: brightness(60%);
`;

export const BannerText = styled.div`
  position: absolute;
  color: white;
  font-family: 'Marck Script', cursive;
  font-size: 45px;
  top: 50%;
  bottom: 50%;
  transform(-50%, -50%);
  cursor: pointer;
`;