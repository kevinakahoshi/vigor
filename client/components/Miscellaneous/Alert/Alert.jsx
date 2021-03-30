import React from 'react';
import {
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CloseIconButton from './CloseIcon';

const errorStyles = makeStyles(() => ({
  error: {
    background: 'linear-gradient(45deg, #e05c5c, #ffcc58)',
  },
  normal: {},
  success: {
    backgroundImage: 'linear-gradient(45deg, #4BBCC0, #8AFFC7)',
  },
}));

const Alert = ({
  autoHideDuration = 3000,
  handleClose,
  open,
  message,
  loggedIn,
}) => {
  const history = useHistory();
  const styles = errorStyles();
  const snackbarStyle = (loggedIn ? 'success' : 'error') || 'normal';

  const closeIconButton = <CloseIconButton handleClose={handleClose} />;

  const handleExit = () => {
    if (!loggedIn) return;
    history.push('/login');
  };

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      open={open}
      TransitionComponent={Slide}
      disableWindowBlurListener
      onExited={handleExit}
    >
      <SnackbarContent
        action={closeIconButton}
        classes={{
          root: styles[snackbarStyle],
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Alert;
