import React from 'react';
import {
  Box,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';

// Components
import SignUpFeatures from './SignUpFeatures';
import SignUpRequirements from './SignUpRequirements';
import VigorLogo from '../Miscellaneous/VigorLogo';

const signUpStyles = makeStyles(theme => ({
  infoBox: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(1.5)
    }
  },
  infoSubBox: {
    borderRadius: theme.spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)'
  },
  logo: {
    display: 'block',
    height: 'auto',
    margin: 'auto',
    maxWidth: '50%'
  },
  signUpText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  unorderedList: {
    margin: 0,
    paddingInlineStart: '2em'
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
      <Grid
        className={styles.infoSubBox}
        container
        spacing={3}>
        <Grid
          item
          xs={6}>
          <ul
            className={styles.unorderedList}>
            <SignUpFeatures />
          </ul>
        </Grid>
        <Grid
          item
          xs={6}>
          <SignUpRequirements />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpInfo;
