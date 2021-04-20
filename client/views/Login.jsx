import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <Typography variant="h1">Login</Typography>
    <Button component={Link} to="/">
      Home
    </Button>
  </>
);

export default Login;
