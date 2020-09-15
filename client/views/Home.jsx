import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';

// Components
import HomeNavBar from '../components/Home/HomeNavBar';
import IntroText from '../components/Home/IntroText';
import LoginModal from '../components/Home/LoginModal';
import LoginModalContent from '../components/Home/LoginModalContent';

const homeStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex'
  }
}));

const Home = () => {
  const styles = homeStyles();

  return (
    <>
      <HomeNavBar />
      <Container
        className={styles.root}
        maxWidth="sm">
        <IntroText />
        <LoginModal>
          <LoginModalContent />
        </LoginModal>
      </Container>
    </>
  );
};

export default Home;
