import React, { useState } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

// Components
import SignUpInfoStepper from '../components/SignUp/Info/SignUpInfoStepper';
import SignUpFormStepper from '../components/SignUp/Form/SignUpFormStepper';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  box: {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

const SignUp = () => {
  const { box, container, wrapper, info, formWrapper } = useStyles();
  const [showPasswordReqs, setShowPasswordReqs] = useState(false);
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
            <SignUpInfoStepper
              passwordReqCircles={passwordReqCircles}
              showPasswordReqs={showPasswordReqs}
            />
          </Grid>
          <Grid className={formWrapper} item sm={6} xs={12}>
            <SignUpFormStepper
              setPasswordReqCircles={setPasswordReqCircles}
              setShowPasswordReqs={setShowPasswordReqs}
              showPasswordReqs={showPasswordReqs}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUp;
