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
  buttonWrapper: {
    marginTop: '8px',
    '& button': {
      width: '100%'
    }
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
    <FormGroup
      className={styles.formGroup}>
      <FormControl>
        <TextField
          aria-describedby="Email Address"
          className={styles.textField}
          color="primary"
          fullWidth={true}
          id="email-textfield"
          margin="dense"
          placeholder="Email"
          variant="outlined" />
        <TextField
          aria-describedby="Password"
          className={styles.textField}
          color="primary"
          fullWidth={true}
          id="password-textField"
          margin="dense"
          placeholder="Password"
          variant="outlined" />
        <Box
          className={styles.buttonWrapper}>
          <VigorPrimaryButton>
            Submit
          </VigorPrimaryButton>
        </Box>
      </FormControl>
    </FormGroup>
  );
};

export default LoginForm;
