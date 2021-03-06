import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const validationStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: spacing(2),
    width: spacing(2),
    borderWidth: '1px',
    borderRadius: spacing(1),
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
  const { root, circle } = validationStyles();

  return (
    <Box className={root}>
      <Box className={`${circle} ${valid ? 'valid' : 'invalid'}`} />
    </Box>
  );
};

export default SignUpValidationCircle;
