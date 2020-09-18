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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1.5)
    }
  },
  textField: {
    '& input': {
      textAlign: 'center'
    }
  }
}));

const SignUpForm = () => {
  const styles = formStyles();

  return (
    <form>
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
            name="email"
            placeholder="Email"
            variant="outlined" />
          <TextField
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
