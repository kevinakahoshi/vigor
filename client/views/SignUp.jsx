import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

// Components
import SignUpInfo from '../components/SignUp/SignUpInfo';
import SignUpForm from '../components/SignUp/SignUpForm';

const pageStyles = makeStyles(theme => ({
  box: {
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    }
  },
  container: {
    display: 'flex',
    height: '100%'
  },
  wrapper: {
    background: '#ffffff',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2)
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(1)
    }
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      borderRight: '1px solid #cccccc'
    }
  },
  formWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      borderLeft: '1px solid #cccccc'
    }
  }
}));

const Login = () => {
  const styles = pageStyles();

  return (
    <Box
      className={styles.box}>
      <Container
        className={styles.container}
        maxWidth="md">
        <Grid
          className={styles.wrapper}
          spacing={3}
          container>
          <Grid
            className={styles.info}
            item
            sm={6}
            xs={12}>
            <SignUpInfo />
          </Grid>
          <Grid
            className={styles.formWrapper}
            item
            sm={6}
            xs={12}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
