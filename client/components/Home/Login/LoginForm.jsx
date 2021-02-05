import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  IconButton,
  makeStyles,
  Slide,
  Snackbar,
  SnackbarContent,
  TextField,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

// Theme Specific
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorPrimaryProgressButton from '../../Miscellaneous/Buttons/VigorPrimaryProgressButton';
import Alert from '../../Miscellaneous/Alert/Alert';

const formStyles = makeStyles((theme) => ({
  buttonWrapper: {
    marginTop: '8px',
    '& button': {
      width: '100%',
    },
  },
  form: {
    width: '100%',
  },
  formGroup: {
    width: '100%',
  },
  textField: {
    '& input': {
      textAlign: 'center',
    },
  },
  snackBar: {
    '&[data-success="true"]': {
      backgroundImage: 'linear-gradient(45deg, #4BBCC0, #8AFFC7)',
    },
    '&[data-success="false"]': {},
  },
}));

const LoginForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const {
    loadingState: { isLoading },
    currentUser: { loggedIn, message },
  } = useSelector((state) => state);
  const styles = formStyles();

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setLoginCredentials((preExistingLoginCredentials) => ({
      ...preExistingLoginCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return;
    dispatch(userActions.logInUser(loginCredentials));
  };

  const handleSnackBarOpen = () => setSnackbarOpen(() => true);
  const handleSnackBarClose = () => {
    setSnackbarOpen(() => false);
    dispatch(userActions.clearMessage());
  };

  useEffect(() => {
    if (message) {
      handleSnackBarOpen();
    }
  }, [message]);

  const closeIcon = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleSnackBarClose}
    >
      <CloseIcon />
    </IconButton>
  );

  return (
    <>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <FormGroup className={styles.formGroup}>
          <FormControl>
            <TextField
              aria-describedby="Email Address"
              autoComplete="username"
              className={styles.textField}
              color="primary"
              fullWidth
              id="email-textfield"
              margin="dense"
              name="email"
              placeholder="Email"
              variant="outlined"
            />
            <TextField
              aria-describedby="Password"
              autoComplete="new-password"
              className={styles.textField}
              color="primary"
              fullWidth
              id="password-textField"
              margin="dense"
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
            />
            <Box className={styles.buttonWrapper}>
              {isLoading ? (
                <VigorPrimaryProgressButton />
              ) : (
                <VigorPrimaryButton type="submit" disabled={!!message}>
                  Submit
                </VigorPrimaryButton>
              )}
            </Box>
          </FormControl>
        </FormGroup>
      </form>
      <Alert
        handleClose={handleSnackBarClose}
        open={snackbarOpen}
        message={message}
        type={loggedIn ? 'success' : 'error'}
      />
    </>
  );
};

export default LoginForm;
