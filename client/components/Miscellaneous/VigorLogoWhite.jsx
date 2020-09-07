import React from 'react';

// Utilities
import imagePath from '../../utilities/imagePath';

const vigorLogoWhite = imagePath('Vigor-Logo-White.svg');

const VigorLogoWhite = ({ classes }) => {
  return (
    <img
      src={vigorLogoWhite}
      className={classes}
      alt="Vigor Logo"
      title="Vigor: Fitness Tracking and Data Visualization" />
  );
};

export default VigorLogoWhite;
