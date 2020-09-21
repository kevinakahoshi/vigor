import React from 'react';
import {
  Box,
  FormControl,
  FormGroup,
  makeStyles,
  TextField
} from '@material-ui/core';

// Theme Specific
import VigorPrimaryButton from '../../theme/custom-styles/primaryButtonStyles';

const formStyles = makeStyles(theme => ({
  buttonWrapper: {
    marginTop: '8px',
    '& button': {
      width: '100%'
    }
  },
  form: {
    width: '100%'
  },
  formGroup: {
    width: '100%'
  },
  textField: {
    '& input': {
      textAlign: 'center'
    }
  }
}));

const LoginForm = () => {
  const styles = formStyles();

  return (
    <form
      className={styles.form}>
      <FormGroup
        className={styles.formGroup}>
        <FormControl>
          <TextField
            aria-describedby="Email Address"
            autoComplete="username"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="email-textfield"
            margin="dense"
            name="email"
            placeholder="Email"
            variant="outlined" />
          <TextField
            aria-describedby="Password"
            autoComplete="new-password"
            className={styles.textField}
            color="primary"
            fullWidth={true}
            id="password-textField"
            margin="dense"
            name="password"
            placeholder="Password"
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

export default LoginForm;
