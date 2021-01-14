import React, { useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// Utilities
import { validEmail } from '../../../utilities/regex';

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

const SignUpForm = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    reEnteredPassword: null,
  });
  const [validationChecks, setValidationChecks] = useState({
    firstNameValidation: false,
    lastNameValidation: false,
    emailValidation: false,
    passwordMatch: false,
    passwordValidated: false,
  });
  const styles = formStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCredentials((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  useEffect(() => {
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

    if (!validEmail.test(email) && emailValidation) {
      validationChecksCopy.emailValidation = false;
    } else if (validEmail.test(email) && !emailValidation) {
      validationChecksCopy.emailValidation = true;
    }

    return () => setValidationChecks(() => validationChecksCopy);
  }, [signUpCredentials]);

  return (
    <>
      <FormGroup className={styles.formGroup}>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            setShowProgress(!showProgress);
          }}
          onChange={handleChange}
        >
          <FormControl className={styles.formControl}>
            <TextField
              error={false}
              aria-describedby="First Name"
              className={styles.textField}
              color="primary"
              fullWidth
              id="first-name-textfield"
              margin="dense"
              name="firstName"
              placeholder="First Name"
              variant="outlined"
            />
            <TextField
              error={false}
              aria-describedby="Last Name"
              className={styles.textField}
              color="primary"
              fullWidth
              id="last-name-textfield"
              margin="dense"
              name="lastName"
              placeholder="Last Name"
              variant="outlined"
            />
            <TextField
              error={false}
              aria-describedby="Email Address"
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
              error={false}
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
            />
            <TextField
              error={false}
              aria-describedby="Re-Enter Password"
              autoComplete="off"
              className={styles.textField}
              color="primary"
              fullWidth
              id="re-enter-password-textField"
              margin="dense"
              name="reenterPassword"
              placeholder="Re-Enter Password"
              type="password"
              variant="outlined"
            />
            <Box className={styles.buttonWrapper}>
              {showProgress ? (
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
    </>
  );
};

export default SignUpForm;
