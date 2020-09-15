import React from 'react';
import {
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';

// Components
import LoginForm from './LoginForm';

// Utilities
import imagePath from '../../utilities/imagePath';

const colorLogo = imagePath('Vigor-Logo.svg');

const modalContent = makeStyles(theme => ({
  paper: {
    boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '480px',
    width: '100%',
    margin: 'auto',
    padding: theme.spacing(3)
  },
  logo: {
    maxWidth: '50%',
    height: 'auto'
  },
  text: {
    margin: `${theme.spacing(2)}px 0`
  }
}));

const LoginModalContent = () => {
  const styles = modalContent();

  return (
    <Paper
      elevation={0}
      className={styles.paper}>
      <img
        className={styles.logo}
        src={colorLogo} />
      <Typography
        className={styles.text}
        variant="h3">
          Login
      </Typography>
      <LoginForm />
    </Paper>
  );
};

export default LoginModalContent;
