import React from 'react';
import {
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

// Custom Components
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
  loggedIn = false,
}) => {
  const styles = errorStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const success = useSelector((state) => state.currentUser.success);
  const snackbarStyle = (success ? 'success' : 'error') || 'normal';

  const closeIconButton = <CloseIconButton handleClose={handleClose} />;

  const handleExit = () => {
    dispatch(userActions.clearMessage());
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
