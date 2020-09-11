import React from 'react';
import {
  Box,
  Grid,
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
  container: {
    padding: '1rem',
    position: 'relative',
    margin: 'auto'
  },
  heading: {
    color: '#ffffff',
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '7.5rem'
  },
  carouselWrapper: {
    minHeight: '38px'
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
    <Grid
      item
      className={styles.container}
      xs={12}>
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
    </Grid>
  );
};

export default IntroText;
