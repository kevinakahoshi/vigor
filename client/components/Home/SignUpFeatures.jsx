import React from 'react';
import {
  Typography
} from '@material-ui/core';

const features = [
  'Track your progress with your exercises',
  'Track your progress with your weight',
  'View your progress over time'
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
