import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userActions } from '../../../actions';

// Theme Specific
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorPrimaryProgressButton from '../../Miscellaneous/Buttons/VigorPrimaryProgressButton';
import Alert from '../../Miscellaneous/Alert/Alert';

const formStyles = makeStyles(() => ({
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
    currentUser: { message },
  } = useSelector((state) => state);
  const { buttonWrapper, form, formGroup, textField } = formStyles();
  const history = useHistory();

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

  const handleAlertOpen = () => setSnackbarOpen(() => true);
  const handleAlertClose = () => setSnackbarOpen(() => false);
  const handleExit = () => history.push('/dashboard');

  useEffect(() => {
    if (message) {
      handleAlertOpen();
    }
  }, [message]);

  const submitOrLoading = isLoading ? (
    <VigorPrimaryProgressButton />
  ) : (
    <VigorPrimaryButton type="submit" disabled={!!message}>
      Submit
    </VigorPrimaryButton>
  );

  return (
    <>
      <form onChange={handleChange} onSubmit={handleSubmit} className={form}>
        <FormGroup className={formGroup}>
          <FormControl>
            <TextField
              aria-describedby="Email Address"
              autoComplete="username"
              className={textField}
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
              className={textField}
              color="primary"
              fullWidth
              id="password-textField"
              margin="dense"
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
            />
            <Box className={buttonWrapper}>{submitOrLoading}</Box>
          </FormControl>
        </FormGroup>
      </form>
      <Alert
        handleClose={handleAlertClose}
        handleExit={handleExit}
        open={snackbarOpen}
      />
    </>
  );
};

export default LoginForm;
