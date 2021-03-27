import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

// Components
// import SignUpInfo from '../components/SignUp/Info/SignUpInfo';
import SignUpForm from '../components/SignUp/Form/SignUpForm';
import Stepper from '../components/SignUp/Stepper/Stepper';

const pageStyles = makeStyles((theme) => ({
  box: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  container: {
    display: 'flex',
    height: '100%',
  },
  wrapper: {
    background: '#ffffff',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(1),
    },
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      borderRight: '1px solid #cccccc',
    },
  },
  formWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      borderLeft: '1px solid #cccccc',
    },
  },
}));

const Login = () => {
  const { box, container, wrapper, info, formWrapper } = pageStyles();
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
            <Stepper />
          </Grid>
          <Grid className={formWrapper} item sm={6} xs={12}>
            <SignUpForm setPasswordReqCircles={setPasswordReqCircles} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
