import React from 'react';
import {
  Typography
} from '@material-ui/core';

const features = [
  'Track progress with your frequency',
  'Track progress with your weight',
  'View progress over time'
];

const SignUpFeatures = () => {
  return features.map(text => (
    <li
      key={text}>
      <Typography>
        {text}
      </Typography>
    </li>
  ));
};

export default SignUpFeatures;
