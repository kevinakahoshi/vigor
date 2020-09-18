import React from 'react';
import {
  Box,
  makeStyles,
  Typography
} from '@material-ui/core';

// Components
import VigorLogo from '../Miscellaneous/VigorLogo';

const signUpStyles = makeStyles(theme => ({
  infoBox: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1.5)
    }
  },
  logo: {
    display: 'block',
    height: 'auto',
    margin: 'auto',
    maxWidth: '33.3333%'
  },
  signUpText: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

const SignUpInfo = () => {
  const styles = signUpStyles();

  return (
    <Box
      className={styles.infoBox}>
      <VigorLogo
        classes={styles.logo}
        finalOpacity={1} />
      <Typography
        className={styles.signUpText}
        variant='h3'>
          Sign Up
      </Typography>
    </Box>
  );
};

export default SignUpInfo;
