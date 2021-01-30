import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

// Utilities
import {
  validEmail,
  validName,
  validPassword,
  includesLetters,
  includesNumbers,
  includesSpecialCharacters,
} from '../../../utilities/regex';

// Theme Specific
import VigorLinkButtonGrey from '../../../theme/custom-styles/greyLinkButtonStyles';
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorPrimaryProgressButton from '../../Miscellaneous/Buttons/VigorPrimaryProgressButton';

const formStyles = makeStyles((theme) => ({
  formGroup: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1.5),
    },
  },
  form: {
    width: '100%',
  },
  formControl: {
    width: '100%',
  },
  buttonWrapper: {
    marginTop: '8px',
    '& button': {
      width: '100%',
    },
  },
  textField: {
    '&:nth-child(1)': {
      marginTop: 0,
    },
    '& input': {
      textAlign: 'center',
    },
  },
  backButton: {
    width: '100%',
    marginTop: theme.spacing(1.5),
  },
}));

const SignUpForm = ({ setPasswordReqCircles }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const styles = formStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingState.isLoading);

  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reEnteredPassword: '',
  });

  const [validationChecks, setValidationChecks] = useState({
    firstNameValidation: true,
    lastNameValidation: true,
    emailValidation: true,
    passwordMatch: true,
    passwordValidated: true,
  });

  const checkNames = useMemo(
    () => (name) => {
      if (!validName.test(name)) return false;
      if (name.length < 1) return false;
      return true;
    },
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value.indexOf('  ') !== -1 || value.indexOf('--') !== -1) return;

    setSignUpCredentials((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return;

    const validationChecksCopy = { ...validationChecks };

    const {
      firstName,
      lastName,
      email,
      password,
      reEnteredPassword,
    } = signUpCredentials;

    const {
      firstNameValidation,
      lastNameValidation,
      emailValidation,
      passwordMatch,
      passwordValidated,
    } = validationChecks;

    if (!checkNames(firstName) && firstNameValidation) {
      validationChecksCopy.firstNameValidation = false;
    } else if (checkNames(firstName) && !firstNameValidation) {
      validationChecksCopy.firstNameValidation = true;
    }

    if (!checkNames(lastName) && lastNameValidation) {
      validationChecksCopy.lastNameValidation = false;
    } else if (checkNames(lastName) && !lastNameValidation) {
      validationChecksCopy.lastNameValidation = true;
    }

    if (!validEmail.test(email) && emailValidation) {
      validationChecksCopy.emailValidation = false;
    } else if (validEmail.test(email) && !emailValidation) {
      validationChecksCopy.emailValidation = true;
    }

    if (!validPassword.test(password) && passwordValidated) {
      validationChecksCopy.passwordValidated = false;
    } else if (validPassword.test(password) && !passwordValidated) {
      validationChecksCopy.passwordValidated = true;
    }

    if (
      password &&
      reEnteredPassword &&
      password !== reEnteredPassword &&
      passwordMatch
    ) {
      validationChecksCopy.passwordMatch = false;
    } else if ((!password || !reEnteredPassword) && passwordMatch) {
      validationChecksCopy.passwordMatch = false;
    } else if (
      password &&
      reEnteredPassword &&
      password === reEnteredPassword &&
      !passwordMatch
    ) {
      validationChecksCopy.passwordMatch = true;
    }

    setValidationChecks(() => validationChecksCopy);

    if (Object.values(validationChecksCopy).includes(false)) {
      // TODO: Handle errors here
    } else {
      dispatch(userActions.signUpUser(signUpCredentials));
    }
  };

  useEffect(() => {
    const { password, reEnteredPassword } = signUpCredentials;

    setPasswordReqCircles(() => ({
      characters: password.length > 7,
      letter: includesLetters.test(password),
      number: includesNumbers.test(password),
      special: includesSpecialCharacters.test(password),
      match: password.length && password === reEnteredPassword,
    }));
  }, [signUpCredentials.password, signUpCredentials.reEnteredPassword]);

  return (
    <>
      <FormGroup className={styles.formGroup}>
        <form
          className={styles.form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <FormControl className={styles.formControl}>
            <TextField
              error={!validationChecks.firstNameValidation}
              aria-describedby="First Name"
              className={styles.textField}
              color="primary"
              fullWidth
              id="first-name-textfield"
              margin="dense"
              name="firstName"
              placeholder="First Name"
              variant="outlined"
              value={signUpCredentials.firstName}
            />
            <TextField
              error={!validationChecks.lastNameValidation}
              aria-describedby="Last Name"
              className={styles.textField}
              color="primary"
              fullWidth
              id="last-name-textfield"
              margin="dense"
              name="lastName"
              placeholder="Last Name"
              variant="outlined"
              value={signUpCredentials.lastName}
            />
            <TextField
              error={!validationChecks.emailValidation}
              aria-describedby="Email Address"
              className={styles.textField}
              color="primary"
              fullWidth
              id="email-textfield"
              margin="dense"
              name="email"
              placeholder="Email"
              variant="outlined"
              value={signUpCredentials.email}
            />
            <TextField
              error={!validationChecks.passwordValidated}
              aria-describedby="Password"
              autoComplete="off"
              className={styles.textField}
              color="primary"
              fullWidth
              id="password-textField"
              margin="dense"
              name="password"
              placeholder="Password"
              type="password"
              variant="outlined"
              value={signUpCredentials.password}
            />
            <TextField
              error={!validationChecks.passwordMatch}
              aria-describedby="Re-Enter Password"
              autoComplete="off"
              className={styles.textField}
              color="primary"
              fullWidth
              id="re-enter-password-textField"
              margin="dense"
              name="reEnteredPassword"
              placeholder="Re-Enter Password"
              type="password"
              variant="outlined"
              value={signUpCredentials.reEnteredPassword}
            />
            <Box className={styles.buttonWrapper}>
              {isLoading ? (
                <VigorPrimaryProgressButton />
              ) : (
                <VigorPrimaryButton type="submit">Submit</VigorPrimaryButton>
              )}
            </Box>
          </FormControl>
        </form>
        <VigorLinkButtonGrey
          className={styles.backButton}
          component={Link}
          to="/"
          size="large"
        >
          Back
        </VigorLinkButtonGrey>
      </FormGroup>
      <Snackbar autoHideDuration={6000} open={snackbarOpen} message="" />
    </>
  );
};

export default SignUpForm;
