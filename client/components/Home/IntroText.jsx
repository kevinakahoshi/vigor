import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';

// Components
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';

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
  subheading: {
    color: '#ffffff',
    fontSize: '1.75rem',
    fontWeight: 400,
    textAlign: 'center'
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
        <Typography
          className={styles.subheading}
          variant="h2">
          Tracker.  Accountability Partner.
        </Typography>
        <VigorLogoWhite
          classes={styles.vigorLogo} />
      </Container>
    </Box>
  );
};

export default IntroText;
