import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const validationStyles = makeStyles(
  ({ spacing, status: { error, success } }) => ({
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
        borderColor: 'transparent',
        ...error,
      },
      '&.valid': {
        borderColor: 'transparent',
        ...success,
      },
    },
  })
);

const StepValidationCircle = (statuses) => {
  const { root, circle } = validationStyles();
  const classes = Object.keys(statuses).reduce(
    (classList, statusClass) =>
      statuses[statusClass] ? `${classList} ${statusClass}` : classList,
    circle
  );

  return (
    <Box className={root}>
      <Box className={classes} />
    </Box>
  );
};

export default StepValidationCircle;
