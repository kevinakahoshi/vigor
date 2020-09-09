import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';

// Components
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';
import WordCarousel from './WordCarousel';

// Utilities
// import imagePath from '../../utilities/imagePath';

// const backgroundLogo = imagePath('Vigor-Logo-White.svg');

const textStyles = makeStyles(theme => ({
  outerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: '1rem',
    position: 'relative'
  },
  heading: {
    color: '#ffffff',
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  carouselWrapper: {
    marginTop: '1rem',
    minHeight: '33px'
  },
  vigorLogo: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    opacity: '.25',
    left: 0,
    top: 0
  }
}
));

const IntroText = () => {
  const styles = textStyles();

  return (
    <Box
      className={styles.outerBox}>
      <Container
        className={styles.container}
        maxWidth="xs">
        <Typography
          className={styles.heading}
          variant="h1">
          Vigor
        </Typography>
        <Box
          className={styles.carouselWrapper}>
          <WordCarousel />
        </Box>
        <VigorLogoWhite
          classes={styles.vigorLogo} />
      </Container>
    </Box>
  );
};

export default IntroText;
