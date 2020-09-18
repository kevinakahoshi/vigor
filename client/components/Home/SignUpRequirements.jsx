import React from 'react';
import {
  Typography
} from '@material-ui/core';

const requirements = [
  '8+ Characters',
  '1+ Letter',
  '1+ Number',
  '1+ Special Character',
  'Password Match'
];

const SignUpRequirements = () => {
  return requirements.map(text => (
    <Typography
      key={text}>
      {text}
    </Typography>
  ));
};

export default SignUpRequirements;
