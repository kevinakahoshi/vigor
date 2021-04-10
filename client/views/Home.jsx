import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

// Components
import NavBar from '../components/Home/Nav/NavBar';
import HeroText from '../components/Home/HeroText/HeroText';

const homeStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'center',
  },
}));

const Home = () => {
  const { root } = homeStyles();

  return (
    <>
      <NavBar />
      <Container className={root} maxWidth="sm">
        <HeroText />
      </Container>
    </>
  );
};

export default Home;
