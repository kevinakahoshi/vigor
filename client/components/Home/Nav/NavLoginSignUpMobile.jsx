import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Components
import VigorSecondaryButton from '../../../theme/custom-styles/secondaryButtonStyles';

const buttonWrapperStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'grid',
    gridGap: '1rem',
    [theme.breakpoints.between('xssm', 'sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.between('xs', 'xssm')]: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const NavLoginSignUpMobile = () => {
  const { buttonWrapper } = buttonWrapperStyles();

  return (
    <Box className={buttonWrapper}>
      <VigorSecondaryButton component={Link} to="/sign-up" size="large">
        Sign Up
      </VigorSecondaryButton>
      <VigorSecondaryButton component={Link} to="/login" size="large">
        Login
      </VigorSecondaryButton>
    </Box>
  );
};

export default NavLoginSignUpMobile;
