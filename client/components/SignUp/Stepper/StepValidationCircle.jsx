import React, { useCallback } from 'react';
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
    '&:not(.active):not(.valid)': {
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

const getClassNames = (circle, statuses) => {
  const classes = [circle];
  Object.keys(statuses).forEach((status) => {
    if (statuses[status]) {
      classes.push(status);
    }
  });
  return classes.join(' ');
};

const StepValidationCircle = ({ active, valid, error }) => {
  const { root, circle } = validationStyles();
  const classes = getClassNames(circle, { active, valid, error });
  console.log(classes);
  return (
    <Box className={root}>
      <Box className={classes} />
    </Box>
  );
};

export default StepValidationCircle;
