import React from 'react';
import {
  Button,
  Typography
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';

const Login = () => {

  return (
    <>
      <Typography
        variant={'h1'}>
        Sign Up
      </Typography>
      <Button
        component={Link}
        to="/">
        Home
      </Button>
    </>
  );
};

export default Login;
