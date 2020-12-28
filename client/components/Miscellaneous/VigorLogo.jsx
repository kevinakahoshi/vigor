import React from 'react';
import { animated, useSpring } from 'react-spring';

// Utilities
import imagePath from '../../utilities/imagePath';

const vigorLogo = imagePath('Vigor-Logo.svg');

const VigorLogo = ({ classes, finalOpacity }) => {
  const style = useSpring({
    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
    from: {
      opacity: 0,
    },
    to: {
      opacity: finalOpacity,
    },
  });

  return (
    <animated.img
      src={vigorLogo}
      className={classes}
      style={style}
      alt="Vigor Logo"
      title="Vigor: Fitness Tracking and Data Visualization"
    />
  );
};

export default VigorLogo;
