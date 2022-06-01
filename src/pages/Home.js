import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import HeroArea from '../components/home/HeroArea';
import MainContent from '../components/home/MainContent';

const Home = () => {
  return (
    <Fragment>
      <HeroArea />
      <Container>
        <MainContent />
      </Container>
    </Fragment>
  );
};

export default Home;
