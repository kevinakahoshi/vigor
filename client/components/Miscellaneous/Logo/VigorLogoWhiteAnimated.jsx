import React from 'react';
import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web';

const VigorLogoWhiteAnimated = () => {
  const config = {
    mass: 1,
    tension: 500,
    friction: 50,
  };

  const svgStyles = useSpring({
    config,
    from: {
      margin: 'auto',
      strokeDashoffset: 0,
    },
    to: [
      {
        margin: 'auto',
        strokeDashoffset: 1000,
      },
      {
        margin: 'auto',
        strokeDashoffset: 0,
        strokeWidth: 0,
      },
    ],
  });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1730.4 1500"
      style={svgStyles}
      alt="Vigor Logo"
      title="Vigor: Fitness Tracking and Data Visualization"
      strokeDasharray={1000}
      stroke="black"
      strokeWidth={10}
      strokeLinejoin="bevel"
    >
      <g id="Left">
        <path fill="#fcfcfc" d="M865.2 1500l173.2-300H692z" />
        <path fill="#f4f4f4" d="M865.2 900L692 1200h346.4z" />
        <path fill="#ffffff" d="M692.2 1200l173.2-300H519z" />
        <path fill="#f9f9f9" d="M692.2 600L519 900h346.4z" />
        <path fill="#f4f4f4" d="M519.2 900l173.2-300H346z" />
        <path fill="#fefefe" d="M519.2 300L346 600h346.4z" />
        <path fill="#f3f3f3" d="M346.2 600l173.2-300H173z" />
        <path fill="#fefefe" d="M346.2 0L173 300h346.4z" />
        <path fill="#f4f4f4" d="M173.2 300L346.4 0H0z" />
      </g>
      <g id="Right">
        <path fill="#fafafa" d="M1557.2 300L1384 0h346.4z" />
        <path fill="#ffffff" d="M1384.2 0l173.2 300H1211z" />
        <path fill="#f8f8f8" d="M1384.2 600L1211 300h346.4z" />
        <path fill="#ffffff" d="M1211.2 300l173.2 300H1038z" />
        <path fill="#f8f8f8" d="M1211.2 900L1038 600h346.4z" />
        <path fill="#efefef" d="M1038.2 600l173.2 300H865z" />
        <path fill="#ffffff" d="M1038.2 1200L865 900h346.4z" />
      </g>
      <g id="Top">
        <path fill="#f8f8f8" d="M865.2 300L692 0h346.4z" />
        <path fill="#ffffff" d="M1038.2 0l173.2 300H865z" />
        <path fill="#f4f4f4" d="M1211.2 300L1038 0h346.4z" />
      </g>
    </animated.svg>
  );
};

export default VigorLogoWhiteAnimated;
