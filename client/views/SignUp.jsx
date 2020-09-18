import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

// Components
import SignUpInfo from '../components/Home/SignUpInfo';
import SignUpForm from '../components/Home/SignUpForm';

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
    padding: theme.spacing(2),
    margin: 'auto'
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      borderRight: '1px solid #cccccc'
    }
  },
  formWrapper: {
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
