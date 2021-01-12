import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import actions from '../../../actions/index';

// Theme Specific
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorPrimaryProgressButton from '../../Miscellaneous/Buttons/VigorPrimaryProgressButton';
import ErrorMessage from '../../Miscellaneous/ErrorMessage/ErrorMessage';

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
}));

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.currentUser);
  const { isLoading } = useSelector((state) => state.loadingState);
  const styles = formStyles();

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setLoginCredentials((creds) => ({
      ...creds,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.userActions.logInUser(loginCredentials));
  };

  return (
    <>
      {error && <ErrorMessage message={error} />}
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
                <VigorPrimaryButton type="submit">Submit</VigorPrimaryButton>
              )}
            </Box>
          </FormControl>
        </FormGroup>
      </form>
    </>
  );
};

export default LoginForm;
