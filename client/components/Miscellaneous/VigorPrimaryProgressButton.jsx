import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

// Components
import VigorPrimaryButton from '../../theme/custom-styles/primaryButtonStyles';

const progressStyles = makeStyles((theme) => ({
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
  const styles = progressStyles();

  return (
    <VigorPrimaryButton className={styles.button} size="large">
      &nbsp;
      <CircularProgress className={styles.spinner} size={24} color="inherit" />
    </VigorPrimaryButton>
  );
};

export default VigorPrimaryProgressButton;
