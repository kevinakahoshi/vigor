import React from 'react';
import {
  animated,
  useSpring
} from 'react-spring';

// Utilities
import imagePath from '../../utilities/imagePath';

const vigorLogoWhite = imagePath('Vigor-Logo-White.svg');

const VigorLogoWhite = ({ classes, finalOpacity }) => {
  const style = useSpring({
    config: {
      mass: 1,
      tension: 500,
      friction: 50
    },
    from: {
      opacity: 0
    },
    to: {
      opacity: finalOpacity
    }
  });

  return (
    <animated.img
      src={vigorLogoWhite}
      className={classes}
      style={style}
      alt="Vigor Logo"
      title="Vigor: Fitness Tracking and Data Visualization" />
  );
};

export default VigorLogoWhite;
