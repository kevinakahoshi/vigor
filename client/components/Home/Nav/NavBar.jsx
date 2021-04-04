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
    position: 'absolute',
    height: '100%',
  },
  vigorLogoWrapper: {
    display: 'flex',
    position: 'relative',
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
  const { navBar, vigorLogoWrapper, vigorLogo, buttonWrapper } = navStyles();

  return (
    <Box className={navBar}>
      <Box className={vigorLogoWrapper}>
        <VigorLogoWhite classes={vigorLogo} finalOpacity={1} />
      </Box>
      <Box className={buttonWrapper}>
        <NavLoginSignUpDesktop />
      </Box>
    </Box>
  );
};

export default NavBar;
