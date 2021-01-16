import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

// Components
import SignUpValidationCircle from '../ValidationCircle/SignUpValidationCircle';

const requirementStyles = makeStyles((theme) => ({
  requirement: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(1),
    '&.invalid': {
      opacity: 0.25,
    },
    '&.valid': {
      opacity: 1,
    },
  },
  text: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const requirements = [
  '8+ Characters',
  '1+ Letter',
  '1+ Number',
  '1+ Special Character',
  'Password Match',
];

const SignUpRequirements = ({ passwordReqCircles }) => {
  const styles = requirementStyles();

  // TODO: Manage the validation through global state

  return Object.keys(passwordReqCircles).map((passwordRequirement, index) => (
    <Box
      className={`${styles.requirement} ${
        passwordReqCircles[passwordRequirement] ? 'valid' : 'invalid'
      }`}
      key={passwordRequirement}
    >
      <SignUpValidationCircle valid={passwordReqCircles[passwordRequirement]} />
      <Typography className={styles.text}>{requirements[index]}</Typography>
    </Box>
  ));
};

export default SignUpRequirements;
