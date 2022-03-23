import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import fridge from '../../image/fridge.jpg';
import makeFood from '../../image/MakeFood.PNG';
import {
  Container,
  Banner,
  BannerImg,
  BannerText } from './LandingElements.js';

const Landing = () => {

  const navigate = useNavigate();
  const handleClickRecipes = useCallback(() =>navigate('/recipes', {replace: true}), [navigate]);
  const handleClickMake = useCallback(() =>navigate('/dish', {replace: true}), [navigate]);
  return (
    <Container>
      <Banner>
        <BannerImg src={fridge}/>
        <BannerText onClick={handleClickRecipes}>Looking for a <br/>Quick Fix?</BannerText>
      </Banner>
      <Banner>
        <BannerImg src={makeFood} />
        <BannerText onClick={handleClickMake}>Making something?</BannerText>
      </Banner>
    </Container>
  );
}

export default Landing;
