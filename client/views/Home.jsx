import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

// Components
import NavBar from '../components/Home/Nav/NavBar';
import HeroText from '../components/Home/HeroText/HeroText';

const homeStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
  },
}));

const Home = () => {
  const styles = homeStyles();

  return (
    <>
      <NavBar />
      <Container className={styles.root} maxWidth="sm">
        <HeroText />
      </Container>
    </>
  );
};

export default Home;
