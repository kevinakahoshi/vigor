import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

// Components
// import SignUpInfo from '../components/SignUp/Info/SignUpInfo';
import SignUpInfoStepper from '../components/SignUp/Info/SignUpInfoStepper';
import SignUpFormStepper from '../components/SignUp/Form/SignUpFormStepper';
// import SignUpForm from '../components/SignUp/Form/SignUpForm';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  box: {
    height: '100%',
    [breakpoints.up('sm')]: {
      paddingTop: spacing(3),
      paddingBottom: spacing(3),
    },
    [breakpoints.down('xs')]: {
      paddingTop: spacing(2),
      paddingBottom: spacing(2),
    },
  },
  container: {
    display: 'flex',
    height: '100%',
  },
  wrapper: {
    background: '#ffffff',
    borderRadius: spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    margin: 'auto',
    [breakpoints.up('sm')]: {
      padding: spacing(2),
    },
    [breakpoints.between('xs', 'sm')]: {
      padding: spacing(1),
    },
  },
  info: {
    [breakpoints.up('sm')]: {
      borderRight: '1px solid #cccccc',
    },
  },
  formWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [breakpoints.up('sm')]: {
      borderLeft: '1px solid #cccccc',
    },
  },
}));

const Login = () => {
  const { box, container, wrapper, info, formWrapper } = useStyles();
  const [passwordReqCircles, setPasswordReqCircles] = useState({
    characters: false,
    letter: false,
    number: false,
    special: false,
    match: false,
  });

  return (
    <Box className={box}>
      <Container className={container} maxWidth="md">
        <Grid className={wrapper} spacing={3} container>
          <Grid className={info} item sm={6} xs={12}>
            {/* <SignUpInfo passwordReqCircles={passwordReqCircles} /> */}
            <SignUpInfoStepper passwordReqCircles={passwordReqCircles} />
          </Grid>
          <Grid className={formWrapper} item sm={6} xs={12}>
            {/* <SignUpForm setPasswordReqCircles={setPasswordReqCircles} /> */}
            <SignUpFormStepper setPasswordReqCircles={setPasswordReqCircles} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
