import React from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  TextField
} from '@material-ui/core';

// Theme Specific
import VigorPrimaryButton from '../../theme/primaryButtonStyles';

const formStyles = makeStyles(theme => ({
  form: {
    width: '100%'
  },
  buttonWrapper: {
    marginTop: '8px',
    '& button': {
      width: '100%'
    }
  },
  formGroup: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1.5)
    }
  },
  textField: {
    '&:nth-child(1)': {
      marginTop: 0
    },
    '& input': {
      textAlign: 'center'
    }
  }
}));

const SignUpForm = () => {
  const styles = formStyles();

  return (
    <form
      className={styles.form}
      onSubmit={() => {
        event.preventDefault();
      }}>
      <FormGroup
        className={styles.formGroup}>
        <FormControl>
          <TextField
            error={false}
            aria-describedby="First Name"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="first-name-textfield"
            margin="dense"
            name="firstName"
            placeholder="First Name"
            variant="outlined" />
          <TextField
            error={false}
            aria-describedby="Last Name"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="last-name-textfield"
            margin="dense"
            name="lastName"
            placeholder="Last Name"
            variant="outlined" />
          <TextField
            error={false}
            aria-describedby="Email Address"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="email-textfield"
            margin="dense"
            name="email"
            placeholder="Email"
            variant="outlined" />
          <TextField
            error={false}
            aria-describedby="Password"
            autoComplete="off"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="password-textField"
            margin="dense"
            name="password"
            placeholder="Password"
            type="password"
            variant="outlined" />
          <TextField
            error={false}
            aria-describedby="Re-Enter Password"
            autoComplete="off"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="re-enter-password-textField"
            margin="dense"
            name="reenterPassword"
            placeholder="Re-Enter Password"
            type="password"
            variant="outlined" />
          <Box
            className={styles.buttonWrapper}>
            <VigorPrimaryButton>
            Submit
            </VigorPrimaryButton>
          </Box>
        </FormControl>
      </FormGroup>
    </form>
  );
};

export default SignUpForm;
