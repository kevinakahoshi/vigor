import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

// Components
import NavLoginSignUpDesktop from './NavLoginSignUpDesktop';
import VigorLogoWhite from '../../Miscellaneous/Logo/VigorLogoWhite';

const navStyles = makeStyles((theme) => ({
  navBar: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  vigorLogo: {
    width: 'auto',
    height: '100%',
    minHeight: '42px',
  },
  buttonWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
}));

const NavBar = () => {
  const styles = navStyles();

  return (
    <Box className={styles.navBar}>
      <Box>
        <VigorLogoWhite classes={styles.vigorLogo} finalOpacity={1} />
      </Box>
      <Box className={styles.buttonWrapper}>
        <NavLoginSignUpDesktop />
      </Box>
    </Box>
  );
};

export default NavBar;
