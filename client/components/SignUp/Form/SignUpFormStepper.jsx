import React, { useEffect, useMemo, useState } from 'react';
import {
  // CircularProgress,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

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
import VerticalLinearStepper from '../Stepper/VerticalLinearStepper';
import Alert from '../../Miscellaneous/Alert/Alert';

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

const SignUpFormStepper = ({
  setPasswordReqCircles,
  setShowPasswordReqs,
  showPasswordReqs,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { formGroup, form, formControl, textField, backButton } = formStyles();
  const dispatch = useDispatch();
  const {
    loadingState: { isLoading },
    currentUser: { message },
  } = useSelector((state) => state);
  const location = useLocation();

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
    passwordValidated: true,
    passwordMatch: true,
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

  const handleAlertOpen = () => setSnackbarOpen(() => true);
  const handleAlertClose = () => setSnackbarOpen(() => false);
  const handleExit = () => dispatch(userActions.clearMessage());

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
    const validationChecksCopyErrors = Object.values(validationChecksCopy);

    if (validationChecksCopyErrors.includes(false)) {
      const singleError =
        validationChecksCopyErrors.indexOf(false) ===
        validationChecksCopyErrors.lastIndexOf(false);
      const s = singleError ? '' : 's';
      const errorMessage = `Error${s} with highlighted field${s}`;
      dispatch(userActions.setUserMessage(errorMessage, false));
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

  useEffect(() => {
    if (message) {
      handleAlertOpen();
    }
  }, [message]);

  useEffect(() => () => dispatch(userActions.clearMessage()), [location]);

  const fields = [
    <TextField
      error={!validationChecks.firstNameValidation}
      aria-describedby="First Name"
      className={textField}
      color="primary"
      fullWidth
      id="first-name-textfield"
      margin="dense"
      name="firstName"
      variant="outlined"
      value={signUpCredentials.firstName}
    />,
    <TextField
      error={!validationChecks.lastNameValidation}
      aria-describedby="Last Name"
      className={textField}
      color="primary"
      fullWidth
      id="last-name-textfield"
      margin="dense"
      name="lastName"
      variant="outlined"
      value={signUpCredentials.lastName}
    />,
    <TextField
      error={!validationChecks.emailValidation}
      aria-describedby="Email Address"
      className={textField}
      color="primary"
      fullWidth
      id="email-textfield"
      margin="dense"
      name="email"
      variant="outlined"
      value={signUpCredentials.email}
    />,
    <TextField
      error={!validationChecks.passwordValidated}
      aria-describedby="Password"
      autoComplete="off"
      className={textField}
      color="primary"
      fullWidth
      id="password-textField"
      margin="dense"
      name="password"
      type="password"
      variant="outlined"
      value={signUpCredentials.password}
    />,
    <TextField
      error={!validationChecks.passwordMatch}
      aria-describedby="Re-Enter Password"
      autoComplete="off"
      className={textField}
      color="primary"
      fullWidth
      id="re-enter-password-textField"
      margin="dense"
      name="reEnteredPassword"
      type="password"
      variant="outlined"
      value={signUpCredentials.reEnteredPassword}
    />,
  ];

  return (
    <>
      <FormGroup className={formGroup}>
        <form className={form} onChange={handleChange} onSubmit={handleSubmit}>
          <FormControl className={formControl}>
            <VerticalLinearStepper
              fields={fields}
              signUpCredentials={signUpCredentials}
              setShowPasswordReqs={setShowPasswordReqs}
              showPasswordReqs={showPasswordReqs}
              validationChecks={validationChecks}
            />
          </FormControl>
        </form>
        <VigorLinkButtonGrey
          className={backButton}
          component={Link}
          to="/"
          size="large"
        >
          Back
        </VigorLinkButtonGrey>
      </FormGroup>
      <Alert
        handleClose={handleAlertClose}
        open={snackbarOpen}
        handleExit={handleExit}
      />
    </>
  );
};

export default SignUpFormStepper;
