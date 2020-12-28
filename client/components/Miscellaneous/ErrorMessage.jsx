import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const errorStyles = makeStyles((theme) => ({
  error: {
    color: 'red',
  },
}));

const ErrorMessage = ({ message }) => {
  const styles = errorStyles();

  return <Typography className={styles.error}>{message}</Typography>;
};

export default ErrorMessage;
