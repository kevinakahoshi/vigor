import React from 'react';
import { makeStyles } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';

const logoWhiteStyles = makeStyles(() => ({
  st1: {
    fill: '#f4f4f4',
  },
  st2: {
    fill: '#ffffff',
  },
  st4: {
    fill: '#fefefe',
  },
  st7: {
    fill: '#f8f8f8',
  },
}));

const VigorLogoWhite = ({ classes, finalOpacity }) => {
  const styles = logoWhiteStyles();

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
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1730.4 1500"
      className={classes}
      style={style}
      alt="Vigor Logo"
      title="Vigor: Fitness Tracking and Data Visualization"
    >
      <g id="Left">
        <path id="_x39_" fill="#fcfcfc" d="M865.2 1500l173.2-300H692z" />
        <path
          id="_x38_"
          className={styles.st1}
          d="M865.2 900L692 1200h346.4z"
        />
        <path
          id="_x37__2_"
          className={styles.st2}
          d="M692.2 1200l173.2-300H519z"
        />
        <path id="_x36_" fill="#f9f9f9" d="M692.2 600L519 900h346.4z" />
        <path id="_x35_" className={styles.st1} d="M519.2 900l173.2-300H346z" />
        <path id="_x34_" className={styles.st4} d="M519.2 300L346 600h346.4z" />
        <path id="_x33_" fill="#f3f3f3" d="M346.2 600l173.2-300H173z" />
        <path id="_x32_" className={styles.st4} d="M346.2 0L173 300h346.4z" />
        <path id="_x31_" className={styles.st1} d="M173.2 300L346.4 0H0z" />
      </g>
      <g id="Right">
        <path id="_x37__1_" fill="#fafafa" d="M1557.2 300L1384 0h346.4z" />
        <path
          id="_x36__1_"
          className={styles.st2}
          d="M1384.2 0l173.2 300H1211z"
        />
        <path
          id="_x35__1_"
          className={styles.st7}
          d="M1384.2 600L1211 300h346.4z"
        />
        <path
          id="_x34__1_"
          className={styles.st2}
          d="M1211.2 300l173.2 300H1038z"
        />
        <path
          id="_x33__1_"
          className={styles.st7}
          d="M1211.2 900L1038 600h346.4z"
        />
        <path id="_x32__1_" fill="#efefef" d="M1038.2 600l173.2 300H865z" />
        <path
          id="_x31__1_"
          className={styles.st2}
          d="M1038.2 1200L865 900h346.4z"
        />
      </g>
      <g id="Top">
        <path
          id="_x33__2_"
          className={styles.st7}
          d="M865.2 300L692 0h346.4z"
        />
        <path
          id="_x32__2_"
          className={styles.st2}
          d="M1038.2 0l173.2 300H865z"
        />
        <path
          id="_x31__2_"
          className={styles.st1}
          d="M1211.2 300L1038 0h346.4z"
        />
      </g>
    </animated.svg>
  );
};

export default VigorLogoWhite;
