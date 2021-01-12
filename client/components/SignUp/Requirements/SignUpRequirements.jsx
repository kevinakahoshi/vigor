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

const SignUpRequirements = () => {
  const styles = requirementStyles();

  // TODO: Manage the validation through global state
  const valid = false;

  return requirements.map((text) => (
    <Box
      className={`${styles.requirement} ${valid ? 'valid' : 'invalid'}`}
      key={text}
    >
      <SignUpValidationCircle valid={valid} />
      <Typography className={styles.text}>{text}</Typography>
    </Box>
  ));
};

export default SignUpRequirements;
