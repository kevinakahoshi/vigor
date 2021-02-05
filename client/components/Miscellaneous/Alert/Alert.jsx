import React from 'react';
import {
  IconButton,
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const errorStyles = makeStyles((theme) => ({
  error: {
    background: 'red',
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
  type,
}) => {
  const styles = errorStyles();

  const closeIcon = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <Snackbar
      // autoHideDuration={autoHideDuration}
      onClose={handleClose}
      open={open}
      TransitionComponent={Slide}
    >
      <SnackbarContent
        action={closeIcon}
        classes={{
          root: styles[type],
        }}
        message={message}
      />
    </Snackbar>
  );
};

export default Alert;
