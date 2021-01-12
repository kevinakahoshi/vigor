import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

// Components
// import ErrorMessage from '../Miscellaneous/ErrorMessage/ErrorMessage';
import SignUpFeatures from '../Features/SignUpFeatures';
import SignUpRequirements from '../Requirements/SignUpRequirements';
import VigorLogo from '../../Miscellaneous/Logo/VigorLogo';

const signUpStyles = makeStyles((theme) => ({
  infoBox: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto auto',
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(1.5),
    },
  },
  infoLogoWrapper: {
    height: '100%',
  },
  infoSubBox: {
    borderRadius: theme.spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  infoFeatures: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  infoValidation: {
    padding: theme.spacing(2),
    display: 'grid',
  },
  logo: {
    display: 'block',
    height: 'auto',
    margin: 'auto',
    maxWidth: '50%',
  },
  signUpText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  unorderedList: {
    margin: 0,
    display: 'grid',
    gridGap: theme.spacing(0.5),
    paddingInlineStart: `${theme.spacing(3.5)}px`,
  },
}));

const SignUpInfo = () => {
  const styles = signUpStyles();

  return (
    <Box className={styles.infoBox}>
      <VigorLogo classes={styles.logo} finalOpacity={1} />
      <Typography className={styles.signUpText} variant="h3">
        Sign Up
      </Typography>
      {/* <ErrorMessage message="Hello Please" /> */}
      <Grid className={styles.infoSubBox} container>
        <Grid className={styles.infoFeatures} item sm={6} xs={12}>
          <ul className={styles.unorderedList}>
            <SignUpFeatures />
          </ul>
        </Grid>
        <Grid className={styles.infoValidation} item sm={6} xs={12}>
          <SignUpRequirements />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpInfo;
