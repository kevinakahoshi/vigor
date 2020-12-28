import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

// Components
import IntroLoginSignUpButtons from './IntroLoginSignUpButtons';
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';
import WordCarousel from './WordCarousel';

// Utilities
// import imagePath from '../../utilities/imagePath';

// const backgroundLogo = imagePath('Vigor-Logo-White.svg');

const textStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
  },
  textWrapper: {
    padding: '1rem',
    position: 'relative',
  },
  heading: {
    color: '#ffffff',
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '7.5rem',
  },
  carouselWrapper: {
    minHeight: '38px',
  },
  vigorLogo: {
    height: '100%',
    width: 'auto',
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  loginSignup: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'block',
      marginTop: '1rem',
    },
  },
}));

const IntroText = () => {
  const styles = textStyles();

  return (
    <Grid item className={styles.container} xs={12}>
      <Box className={styles.textWrapper}>
        <Typography className={styles.heading} variant="h1">
          Vigor
        </Typography>
        <Box className={styles.carouselWrapper}>
          <WordCarousel />
        </Box>
        <VigorLogoWhite finalOpacity={0.25} classes={styles.vigorLogo} />
      </Box>
      <Box className={styles.loginSignup}>
        <IntroLoginSignUpButtons />
      </Box>
    </Grid>
  );
};

export default IntroText;
