import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';

// Components
import SignUpFeatures from '../Features/SignUpFeatures';
import SignUpRequirements from '../Requirements/SignUpRequirements';
import VigorLogo from '../../Miscellaneous/Logo/VigorLogo';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  infoBox: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto auto',
    [breakpoints.up('sm')]: {
      paddingRight: spacing(1.5),
    },
  },
  infoSubBox: {
    borderRadius: spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    [breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  infoFeatures: {
    padding: spacing(2),
    [breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  infoValidation: {
    padding: spacing(2),
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
    marginBottom: spacing(2),
    marginTop: spacing(2),
  },
  unorderedList: {
    margin: 0,
    display: 'grid',
    gridGap: spacing(0.5),
    paddingInlineStart: `${spacing(3.5)}px`,
  },
}));

const SignUpInfo = ({ passwordReqCircles }) => {
  const {
    infoBox,
    infoSubBox,
    infoFeatures,
    infoValidation,
    logo,
    signUpText,
    unorderedList,
  } = useStyles();

  return (
    <Box className={infoBox}>
      <VigorLogo classes={logo} finalOpacity={1} />
      <Typography className={signUpText} variant="h3">
        Sign Up
      </Typography>
      <Grid className={infoSubBox} container>
        <Grid className={infoFeatures} item sm={6} xs={12}>
          <ul className={unorderedList}>
            <SignUpFeatures />
          </ul>
        </Grid>
        <Grid className={infoValidation} item sm={6} xs={12}>
          <SignUpRequirements passwordReqCircles={passwordReqCircles} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpInfo;
