import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';

// Components
import NavLoginSignUpButtons from './NavLoginSignUpButtons';
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';

const navStyles = makeStyles(theme => ({
  navBar: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    }
  },
  vigorLogo: {
    width: 'auto',
    height: '100%',
    minHeight: '42px'
  },
  buttonWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none'
    }
  }
}
));

const HomeNavBar = () => {
  const styles = navStyles();

  return (
    <Box
      className={styles.navBar}>
      <VigorLogoWhite
        classes={styles.vigorLogo}
        finalOpacity={1} />
      <Box
        className={styles.buttonWrapper}>
        <NavLoginSignUpButtons />
      </Box>
    </Box>
  );
};

export default HomeNavBar;
