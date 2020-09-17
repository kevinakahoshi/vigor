import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

// Components
import SignUpSection from '../components/Home/SignUpSection';
import SignUpForm from '../components/Home/SignUpForm';

const pageStyles = makeStyles(theme => ({
  wrapper: {
    background: '#ffffff',
    borderRadius: theme.spacing(0.5),
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    padding: theme.spacing(2)
  }
}));

const Login = () => {
  const styles = pageStyles();

  return (
    <Container
      maxWidth="md">
      <Grid
        className={styles.wrapper}
        container>
        <Grid
          item
          sm={6}
          xs={12}>
          <SignUpSection />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
