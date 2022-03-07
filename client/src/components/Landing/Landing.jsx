import React from 'react';
import fridge from '../../image/fridge.jpg';
import {
  Container,
  Banner,
  BannerImg,
  BannerText } from './LandingElements.js';

const Landing = () => {
  return (
    <Container>
      <Banner>
        <BannerImg src={fridge}/>
        <BannerText>Looking for a <br />Quick Fix?</BannerText>
      </Banner>
    </Container>
  );
}

export default Landing;
