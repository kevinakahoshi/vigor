import React, { forwardRef } from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';

// Components
import LoginForm from './LoginForm';
import VigorLogo from '../../Miscellaneous/Logo/VigorLogo';

const modalContent = makeStyles((theme) => ({
  paper: {
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '480px',
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(3),
  },
  logo: {
    maxWidth: '50%',
    height: 'auto',
  },
  text: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const LoginModalContent = () => {
  const { paper, logo, text } = modalContent();

  return (
    <Paper elevation={0} className={paper}>
      <VigorLogo classes={logo} finalOpacity={1} />
      <Typography className={text} variant="h3">
        Login
      </Typography>
      <LoginForm />
    </Paper>
  );
};

export default forwardRef((props, ref) => <LoginModalContent innerRef={ref} />);
