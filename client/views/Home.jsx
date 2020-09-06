import React from 'react';
import {
  Button,
  Typography
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Typography
        variant={'h1'}>
        Home
      </Typography>
      <Button
        component={Link}
        to="/login">
        Login
      </Button>
    </>
  );
};

export default Home;