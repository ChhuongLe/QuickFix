import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import fridge from '../../image/fridge.jpg';
import {
  Container,
  Banner,
  BannerImg,
  BannerText } from './LandingElements.js';

const Landing = () => {

  const navigate = useNavigate();
  const handleClick = useCallback(() =>navigate('/recipes', {replace: true}), [navigate]);
  return (
    <Container>
      <Banner>
        <BannerImg src={fridge}/>
        <BannerText onClick={handleClick}>Looking for a <br/>Quick Fix?</BannerText>
      </Banner>
    </Container>
  );
}

export default Landing;
