import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';

// Components
import HomeNavBar from '../components/Home/HomeNavBar';
import IntroText from '../components/Home/IntroText';

const homeStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  }
}));

const Home = () => {
  const styles = homeStyles();

  return (
    <Box
      className={styles.root}>
      <HomeNavBar />
      <IntroText />
    </Box>
  );
};

export default Home;
