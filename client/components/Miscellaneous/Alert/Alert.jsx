import React from 'react';
import {
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
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
  autoHideDuration = 5000,
  handleClose,
  open,
  message,
  loggedIn,
}) => {
  const styles = errorStyles();
  const snackbarStyle = (loggedIn ? 'success' : 'error') || 'normal';

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      open={open}
      TransitionComponent={Slide}
    >
      <SnackbarContent
        action={<CloseIconButton handleClose={handleClose} />}
        classes={{
          root: styles[snackbarStyle],
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Alert;
