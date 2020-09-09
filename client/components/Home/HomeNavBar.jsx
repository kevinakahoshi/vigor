import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';

// Components
import LoginSignUpButtons from './LoginSignUpButtons';
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';

const navStyles = makeStyles(theme => ({
  navBar: {
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    position: 'fixed',
    width: '100%',
    zIndex: 1
  },
  vigorLogo: {
    width: 'auto',
    height: '100%',
    opacity: 1
  }
}
));

const HomeNavBar = () => {
  const styles = navStyles();

  return (
    <Box
      className={styles.navBar}>
      <VigorLogoWhite
        classes={styles.vigorLogo} />
      <LoginSignUpButtons />
    </Box>
  );
};

export default HomeNavBar;
