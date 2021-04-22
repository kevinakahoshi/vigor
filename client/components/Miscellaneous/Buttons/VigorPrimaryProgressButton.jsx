import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

// Components
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';

const progressStyles = makeStyles(() => ({
  button: {
    opacity: '0.75',
    pointerEvents: 'none',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    position: 'absolute',
  },
}));

const VigorPrimaryProgressButton = () => {
  const { button, spinner } = progressStyles();

  return (
    <VigorPrimaryButton className={button} size="large" disabled>
      &nbsp;
      <CircularProgress className={spinner} size={24} color="inherit" />
    </VigorPrimaryButton>
  );
};

export default VigorPrimaryProgressButton;
