import React from 'react';
import {
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

// Custom Components
import CloseIconButton from './CloseIcon';

const errorStyles = makeStyles(({ status: { error, success } }) => ({
  error,
  success,
}));

const Alert = ({
  autoHideDuration = 3000,
  handleClose,
  open,
  handleExit = null,
}) => {
  const styles = errorStyles();
  const { message, success } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const snackbarStyle = success ? 'success' : 'error';
  const exitedHandler =
    handleExit || (() => dispatch(userActions.clearMessage()));

  const closeIconButton = <CloseIconButton handleClose={handleClose} />;

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      open={open}
      TransitionComponent={Slide}
      disableWindowBlurListener
      onExited={exitedHandler}
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
