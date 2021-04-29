import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
import { animated, useSpring, config } from 'react-spring';

// const logoColorStyles = makeStyles(() => ({
//   cls3: {
//     fill: '#f4f4f4',
//   },
//   cls4: {
//     fill: '#ffffff',
//   },
//   cls6: {
//     fill: '#fefefe',
//   },
//   cls9: {
//     fill: '#f8f8f8',
//   },
//   cls14: {
//     fill: 'url(#linear-gradient-4)',
//     mixBlendMode: 'multiply',
//   },
//   cls16: {
//     fill: 'url(#linear-gradient-6)',
//     mixBlendMode: 'multiply',
//   },
//   cls22: {
//     fill: 'url(#linear-gradient-12)',
//     mixBlendMode: 'multiply',
//   },
//   cls23: {
//     fill: 'url(#linear-gradient-13)',
//     mixBlendMode: 'multiply',
//   },
//   cls31: {
//     fill: 'url(#linear-gradient-23)',
//     mixBlendMode: 'multiply',
//   },
// }));

const VigorLogo = () => {
  // const styles = logoColorStyles();
  const [flip, setFlip] = useState(false);

  const style = useSpring({
    config: {
      mass: 25,
      tension: 100,
      friction: 100,
    },
    from: {
      width: '70%',
      margin: 'auto',
      opacity: 0,
      strokeDashoffset: 0,
      strokeWidth: 10,
    },
    to: {
      width: '70%',
      margin: 'auto',
      opacity: 1,
      strokeDashoffset: 1000,
      strokeWidth: 0,
    },
  });

  console.log(style);

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1730.41 1500"
      style={style}
      strokeDasharray={1000}
      stroke="black"
      strokeWidth={10}
    >
      <defs>
        <linearGradient
          id="linear-gradient-12"
          x1="1384"
          y1=".18"
          x2="1384.42"
          y2=".18"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-28"
          x1="1211.1"
          y1="299.82"
          x2="1211.31"
          y2="299.82"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-2"
          x1="865.1"
          y1="900.18"
          x2="865.31"
          y2="900.18"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="1038.21"
          y1="1199.91"
          x2="1038.42"
          y2="1199.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="865"
          y1="900.18"
          x2="865.42"
          y2="900.18"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="519"
          y1="899.91"
          x2="519.21"
          y2="899.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-6"
          x1="865"
          y1="899.82"
          x2="865.42"
          y2="899.82"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1="692.21"
          y1="600.09"
          x2="692.42"
          y2="600.09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-8"
          x1="346"
          y1="599.91"
          x2="346.21"
          y2="599.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-9"
          x1="519.21"
          y1="300.09"
          x2="519.42"
          y2="300.09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-10"
          x1="173"
          y1="299.91"
          x2="173.21"
          y2="299.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-11"
          x1="346.21"
          y1=".09"
          x2="346.42"
          y2=".09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient"
          x1="692"
          y1="1199.91"
          x2="692.21"
          y2="1199.91"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4bbcc0" />
          <stop offset="1" stopColor="#8affc7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-13"
          x1="1211"
          y1="299.82"
          x2="1211.42"
          y2="299.82"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-14"
          x1="1384.1"
          y1=".18"
          x2="1384.31"
          y2=".18"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-15"
          x1="1557.21"
          y1="299.91"
          x2="1557.42"
          y2="299.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-16"
          x1="1211"
          y1="300.09"
          x2="1211.21"
          y2="300.09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-17"
          x1="1384.21"
          y1="599.91"
          x2="1384.42"
          y2="599.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-18"
          x1="1038"
          y1="600.09"
          x2="1038.21"
          y2="600.09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-20"
          x1="1211.21"
          y1="899.91"
          x2="1211.42"
          y2="899.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-22"
          x1="40.78"
          y1="1141.82"
          x2="1264.37"
          y2="-81.77"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-23"
          x1="1038"
          y1=".18"
          x2="1038.42"
          y2=".18"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-24"
          x1="865"
          y1="299.91"
          x2="865.21"
          y2="299.91"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-25"
          x1="1038.1"
          y1=".18"
          x2="1038.31"
          y2=".18"
          xlinkHref="#linear-gradient"
        />
        <style>{`.cls-3{fill:#f4f4f4}.cls-4{fill:#fff}.cls-6{fill:#fefefe}.cls-9{fill:#f8f8f8}.cls-14,.cls-16,.cls-22,.cls-23,.cls-31{mix-blend-mode:multiply}.cls-14{fill:url(#linear-gradient-4)}.cls-16{fill:url(#linear-gradient-6)}.cls-22{fill:url(#linear-gradient-12)}.cls-23{fill:url(#linear-gradient-13)}.cls-31{fill:url(#linear-gradient-23)}`}</style>
      </defs>
      <g style={{ isolation: 'isolate' }}>
        <g id="Left">
          <path
            id="_9"
            data-name="9"
            fill="#fcfcfc"
            d="M865.21 1500l173.2-300H692l173.21 300z"
          />
          <path
            id="_8"
            data-name="8"
            className="cls-3"
            d="M865.21 900L692 1200h346.41l-173.2-300z"
          />
          <path
            id="_7"
            data-name="7"
            className="cls-4"
            d="M692.21 1200l173.2-300H519l173.21 300z"
          />
          <path
            id="_6"
            data-name="6"
            fill="#f9f9f9"
            d="M692.21 600L519 900h346.41l-173.2-300z"
          />
          <path
            id="_5"
            data-name="5"
            className="cls-3"
            d="M519.21 900l173.2-300H346l173.21 300z"
          />
          <path
            id="_4"
            data-name="4"
            className="cls-6"
            d="M519.21 300L346 600h346.41l-173.2-300z"
          />
          <path
            id="_3"
            data-name="3"
            fill="#f3f3f3"
            d="M346.2 600l173.21-300H173l173.2 300z"
          />
          <path
            id="_2"
            data-name="2"
            className="cls-6"
            d="M346.2 0L173 300h346.41L346.2 0z"
          />
          <path
            id="_1"
            data-name="1"
            className="cls-3"
            d="M173.21 300L346.41 0H0l173.21 300z"
          />
        </g>
        <g id="Right">
          <path
            id="_7-2"
            data-name="7"
            fill="#fafafa"
            d="M1557.2 300L1384 0h346.41L1557.2 300z"
          />
          <path
            id="_6-2"
            data-name="6"
            className="cls-4"
            d="M1384.2 0l173.21 300H1211L1384.2 0z"
          />
          <path
            id="_5-2"
            data-name="5"
            className="cls-9"
            d="M1384.2 600L1211 300h346.41L1384.2 600z"
          />
          <path
            id="_4-2"
            data-name="4"
            className="cls-4"
            d="M1211.2 300l173.21 300H1038l173.2-300z"
          />
          <path
            id="_3-2"
            data-name="3"
            className="cls-9"
            d="M1211.2 900L1038 600h346.41L1211.2 900z"
          />
          <path
            id="_2-2"
            data-name="2"
            fill="#efefef"
            d="M1038.2 600l173.21 300H865l173.2-300z"
          />
          <path
            id="_1-2"
            data-name="1"
            className="cls-4"
            d="M1038.2 1200L865 900h346.41l-173.21 300z"
          />
        </g>
        <g id="Top">
          <path
            id="_3-3"
            data-name="3"
            className="cls-9"
            d="M865.21 300L692 0h346.41l-173.2 300z"
          />
          <path
            id="_2-3"
            data-name="2"
            className="cls-4"
            d="M1038.2 0l173.21 300H865L1038.2 0z"
          />
          <path
            id="_1-3"
            data-name="1"
            className="cls-3"
            d="M1211.2 300L1038 0h346.41L1211.2 300z"
          />
        </g>
        <g id="Grouped_Together" data-name="Grouped Together">
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient)"
            d="M692.11 1199.82l.1.18H692l.11-.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-2)"
            d="M865.21 900l.11.18-.11.18-.1-.18.1-.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-3)"
            d="M1038.41 1200h-.21l.12-.18.09.18z"
          />
          <path
            className="cls-14"
            d="M865.41 900l-.09.18-.11.18-.1-.18-.11-.18h.41z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-5)"
            d="M519.11 899.82l.1.18H519l.11-.18z"
          />
          <path className="cls-16" d="M865.41 900H865l.21-.36.2.36z" />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-7)"
            d="M692.41 600l-.09.18-.11-.18h.2z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-8)"
            d="M346.2 600h-.2l.11-.18.09.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-9)"
            d="M519.41 300l-.09.18-.11-.18h.2z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-10)"
            d="M173.21 300H173l.1-.18.11.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-11)"
            d="M346.42 0l-.11.18-.11-.18h.22z"
          />
          <path
            className="cls-22"
            d="M1384.41 0l-.09.18-.12.18-.09-.18-.12-.18h.42z"
          />
          <path
            className="cls-23"
            d="M1211.32 299.82l.09.18h-.42l.12-.18.09-.18.12.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-14)"
            d="M1384.2 0l.12.18-.12.18-.09-.18.09-.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-15)"
            d="M1557.41 300h-.21l.12-.18.09.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-16)"
            d="M1211.2 300l-.09.18-.12-.18h.21z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-17)"
            d="M1384.41 600h-.21l.12-.18.09.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-18)"
            d="M1038.2 600l-.09.18-.12-.18h.21z"
          />
          <path className="cls-16" d="M865.21 899.64l.2.36H865l.21-.36z" />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-20)"
            d="M1211.41 900h-.21l.12-.18.09.18z"
          />
          <path
            className="cls-14"
            d="M865.41 900l-.09.18-.11.18-.1-.18-.11-.18h.41z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-22)"
            d="M1384.32 599.82l-.12.18h.21l-173.09 299.82-.12.18h.21l-173.09 299.82-.12.18h.21l-173.2 300L692 1200h.21l-.1-.18L519 900h.21l-.1-.18L346 600h.2l-.09-.18L173 300h.21l-.11-.18L-.01 0H346.2l.11.18L519.41 300h-.2l.11.18L692.41 600h-.2l.11.18 172.89 299.46-.21.36.11.18.1.18.11-.18.09-.18-.2-.36 172.9-299.46.09-.18h-.21l173.12-299.82.09-.18h.21l-.09-.18-.12-.18-.09.18-.12.18H865.21l-.1-.18L692 0h345.99l.12.18.09.18.12-.18.09-.18h345.58l.12.18.09.18.12-.18.09-.18h346l-173.09 299.82-.12.18h.21l-173.09 299.82z"
          />
          <path
            className="cls-31"
            d="M1038.41 0l-.09.18-.12.18-.09-.18-.12-.18h.42z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-24)"
            d="M865.11 299.82l.1.18H865l.11-.18z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-25)"
            d="M1038.2 0l.12.18-.12.18-.09-.18.09-.18z"
          />
          <path
            className="cls-23"
            d="M1211.41 300h-.42l.12-.18.09-.18.12.18.09.18z"
          />
          <path
            className="cls-31"
            d="M1038.41 0l-.09.18-.12.18-.09-.18-.12-.18h.42z"
          />
          <path
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#linear-gradient-28)"
            d="M1211.2 299.64l.12.18-.12.18-.09-.18.09-.18z"
          />
          <path
            className="cls-22"
            d="M1384.41 0l-.09.18-.12.18-.09-.18-.12-.18h.42z"
          />
        </g>
      </g>
    </animated.svg>
  );
};

export default VigorLogo;
