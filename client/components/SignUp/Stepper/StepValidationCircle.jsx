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
    borderWidth: 1,
    borderRadius: spacing(1),
    '&:not(.active):not(.valid):not(.error)': {
      opacity: 0.25,
    },
    '&:not(.error)': {
      borderStyle: 'solid',
    },
    '&.error': {
      borderColor: 'red',
      borderStyle: 'solid',
    },
    '&.valid': {
      borderColor: 'transparent',
      backgroundImage: 'linear-gradient(45deg, #4BBCC0, #8AFFC7)',
    },
  },
}));

const StepValidationCircle = (statuses) => {
  const { root, circle } = validationStyles();
  const classes = Object.keys(statuses).reduce(
    (prev, curr) => (statuses[curr] ? `${prev} ${curr}` : prev),
    circle
  );

  return (
    <Box className={root}>
      <Box className={classes} />
    </Box>
  );
};

export default StepValidationCircle;
