import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const validationStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    borderWidth: '1px',
    borderRadius: theme.spacing(1),
    '&.invalid': {
      borderStyle: 'solid',
    },
    '&.valid': {
      borderColor: 'transparent',
      backgroundImage: 'linear-gradient(45deg, #4BBCC0, #8AFFC7)',
    },
  },
}));

const SignUpValidationCircle = ({ valid }) => {
  const styles = validationStyles();

  return (
    <Box className={styles.root}>
      <Box className={`${styles.circle} ${valid ? 'valid' : 'invalid'}`} />
    </Box>
  );
};

export default SignUpValidationCircle;
