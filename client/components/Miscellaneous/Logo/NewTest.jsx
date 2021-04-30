import React from 'react';
import { animated, useSpring, config } from 'react-spring';

const NewTest = () => {
  const style = useSpring({
    config: config.molasses,
    from: {
      strokeDasharray: 1000,
      strokeWidth: 1,
    },
    to: {
      strokeDasharray: 500,
      strokeWidth: 0,
    },
  });

  return (
    <animated.svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1730.41 1500"
    >
      <defs>
        <style>{`.cls-1{isolation:isolate;}.cls-2{fill:#fcfcfc;}.cls-3{fill:#f4f4f4;}.cls-4{fill:#fff;}.cls-5{fill:#f9f9f9;}.cls-6{fill:#fefefe;}.cls-7{fill:#f3f3f3;}.cls-8{fill:#fafafa;}.cls-9{fill:#f8f8f8;}.cls-10{fill:#efefef;}.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-32,.cls-33,.cls-34{mix-blend-mode:multiply;}.cls-11{fill:url(#linear-gradient);}.cls-12{fill:url(#linear-gradient-2);}.cls-13{fill:url(#linear-gradient-3);}.cls-14{fill:url(#linear-gradient-4);}.cls-15{fill:url(#linear-gradient-5);}.cls-16{fill:url(#linear-gradient-6);}.cls-17{fill:url(#linear-gradient-7);}.cls-18{fill:url(#linear-gradient-8);}.cls-19{fill:url(#linear-gradient-9);}.cls-20{fill:url(#linear-gradient-10);}.cls-21{fill:url(#linear-gradient-11);}.cls-22{fill:url(#linear-gradient-12);}.cls-23{fill:url(#linear-gradient-13);}.cls-24{fill:url(#linear-gradient-14);}.cls-25{fill:url(#linear-gradient-15);}.cls-26{fill:url(#linear-gradient-16);}.cls-27{fill:url(#linear-gradient-17);}.cls-28{fill:url(#linear-gradient-18);}.cls-29{fill:url(#linear-gradient-20);}.cls-30{fill:url(#linear-gradient-22);}.cls-31{fill:url(#linear-gradient-23);}.cls-32{fill:url(#linear-gradient-24);}.cls-33{fill:url(#linear-gradient-25);}.cls-34{fill:url(#linear-gradient-28);}`}</style>
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
          y1="0.09"
          x2="346.42"
          y2="0.09"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-12"
          x1="1384"
          y1="0.18"
          x2="1384.42"
          y2="0.18"
          xlinkHref="#linear-gradient"
        />
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
          y1="0.18"
          x2="1384.31"
          y2="0.18"
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
          y1="0.18"
          x2="1038.42"
          y2="0.18"
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
          y1="0.18"
          x2="1038.31"
          y2="0.18"
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
      </defs>
      <title>Artboard 1</title>
      <g className="cls-1">
        <g id="Left">
          <polygon
            id="_9"
            data-name="9"
            className="cls-2"
            points="865.21 1500 1038.41 1200 692 1200 865.21 1500"
          />
          <polygon
            id="_8"
            data-name="8"
            className="cls-3"
            points="865.21 900 692 1200 1038.41 1200 865.21 900"
          />
          <polygon
            id="_7"
            data-name="7"
            className="cls-4"
            points="692.21 1200 865.41 900 519 900 692.21 1200"
          />
          <polygon
            id="_6"
            data-name="6"
            className="cls-5"
            points="692.21 600 519 900 865.41 900 692.21 600"
          />
          <polygon
            id="_5"
            data-name="5"
            className="cls-3"
            points="519.21 900 692.41 600 346 600 519.21 900"
          />
          <polygon
            id="_4"
            data-name="4"
            className="cls-6"
            points="519.21 300 346 600 692.41 600 519.21 300"
          />
          <polygon
            id="_3"
            data-name="3"
            className="cls-7"
            points="346.2 600 519.41 300 173 300 346.2 600"
          />
          <polygon
            id="_2"
            data-name="2"
            className="cls-6"
            points="346.2 0 173 300 519.41 300 346.2 0"
          />
          <polygon
            id="_1"
            data-name="1"
            className="cls-3"
            points="173.21 300 346.41 0 0 0 173.21 300"
          />
        </g>
        <g id="Right">
          <polygon
            id="_7-2"
            data-name="7"
            className="cls-8"
            points="1557.2 300 1384 0 1730.41 0 1557.2 300"
          />
          <polygon
            id="_6-2"
            data-name="6"
            className="cls-4"
            points="1384.2 0 1557.41 300 1211 300 1384.2 0"
          />
          <polygon
            id="_5-2"
            data-name="5"
            className="cls-9"
            points="1384.2 600 1211 300 1557.41 300 1384.2 600"
          />
          <polygon
            id="_4-2"
            data-name="4"
            className="cls-4"
            points="1211.2 300 1384.41 600 1038 600 1211.2 300"
          />
          <polygon
            id="_3-2"
            data-name="3"
            className="cls-9"
            points="1211.2 900 1038 600 1384.41 600 1211.2 900"
          />
          <polygon
            id="_2-2"
            data-name="2"
            className="cls-10"
            points="1038.2 600 1211.41 900 865 900 1038.2 600"
          />
          <polygon
            id="_1-2"
            data-name="1"
            className="cls-4"
            points="1038.2 1200 865 900 1211.41 900 1038.2 1200"
          />
        </g>
        <g id="Top">
          <polygon
            id="_3-3"
            data-name="3"
            className="cls-9"
            points="865.21 300 692 0 1038.41 0 865.21 300"
          />
          <polygon
            id="_2-3"
            data-name="2"
            className="cls-4"
            points="1038.2 0 1211.41 300 865 300 1038.2 0"
          />
          <polygon
            id="_1-3"
            data-name="1"
            className="cls-3"
            points="1211.2 300 1038 0 1384.41 0 1211.2 300"
          />
        </g>
        <g id="Grouped_Together" data-name="Grouped Together">
          <polygon
            className="cls-11"
            points="692.11 1199.82 692.21 1200 692 1200 692.11 1199.82"
          />
          <polygon
            className="cls-12"
            points="865.21 900 865.32 900.18 865.21 900.36 865.11 900.18 865.21 900"
          />
          <polygon
            className="cls-13"
            points="1038.41 1200 1038.2 1200 1038.32 1199.82 1038.41 1200"
          />
          <polygon
            className="cls-14"
            points="865.41 900 865.32 900.18 865.21 900.36 865.11 900.18 865 900 865.41 900"
          />
          <polygon
            className="cls-15"
            points="519.11 899.82 519.21 900 519 900 519.11 899.82"
          />
          <polygon
            className="cls-16"
            points="865.41 900 865 900 865.21 899.64 865.41 900"
          />
          <polygon
            className="cls-17"
            points="692.41 600 692.32 600.18 692.21 600 692.41 600"
          />
          <polygon
            className="cls-18"
            points="346.2 600 346 600 346.11 599.82 346.2 600"
          />
          <polygon
            className="cls-19"
            points="519.41 300 519.32 300.18 519.21 300 519.41 300"
          />
          <polygon
            className="cls-20"
            points="173.21 300 173 300 173.1 299.82 173.21 300"
          />
          <polygon
            className="cls-21"
            points="346.42 0 346.31 0.18 346.2 0 346.42 0"
          />
          <polygon
            className="cls-22"
            points="1384.41 0 1384.32 0.18 1384.2 0.36 1384.11 0.18 1383.99 0 1384.41 0"
          />
          <polygon
            className="cls-23"
            points="1211.32 299.82 1211.41 300 1210.99 300 1211.11 299.82 1211.2 299.64 1211.32 299.82"
          />
          <polygon
            className="cls-24"
            points="1384.2 0 1384.32 0.18 1384.2 0.36 1384.11 0.18 1384.2 0"
          />
          <polygon
            className="cls-25"
            points="1557.41 300 1557.2 300 1557.32 299.82 1557.41 300"
          />
          <polygon
            className="cls-26"
            points="1211.2 300 1211.11 300.18 1210.99 300 1211.2 300"
          />
          <polygon
            className="cls-27"
            points="1384.41 600 1384.2 600 1384.32 599.82 1384.41 600"
          />
          <polygon
            className="cls-28"
            points="1038.2 600 1038.11 600.18 1037.99 600 1038.2 600"
          />
          <polygon
            className="cls-16"
            points="865.21 899.64 865.41 900 865 900 865.21 899.64"
          />
          <polygon
            className="cls-29"
            points="1211.41 900 1211.2 900 1211.32 899.82 1211.41 900"
          />
          <polygon
            className="cls-14"
            points="865.41 900 865.32 900.18 865.21 900.36 865.11 900.18 865 900 865.41 900"
          />
          <polygon
            className="cls-30"
            points="1384.32 599.82 1384.2 600 1384.41 600 1211.32 899.82 1211.2 900 1211.41 900 1038.32 1199.82 1038.2 1200 1038.41 1200 865.21 1500 692 1200 692.21 1200 692.11 1199.82 519 900 519.21 900 519.11 899.82 346 600 346.2 600 346.11 599.82 173 300 173.21 300 173.1 299.82 -0.01 0 346.2 0 346.31 0.18 519.41 300 519.21 300 519.32 300.18 692.41 600 692.21 600 692.32 600.18 865.21 899.64 865 900 865.11 900.18 865.21 900.36 865.32 900.18 865.41 900 865.21 899.64 1038.11 600.18 1038.2 600 1037.99 600 1211.11 300.18 1211.2 300 1211.41 300 1211.32 299.82 1211.2 299.64 1211.11 299.82 1210.99 300 865.21 300 865.11 299.82 692 0 1037.99 0 1038.11 0.18 1038.2 0.36 1038.32 0.18 1038.41 0 1383.99 0 1384.11 0.18 1384.2 0.36 1384.32 0.18 1384.41 0 1730.41 0 1557.32 299.82 1557.2 300 1557.41 300 1384.32 599.82"
          />
          <polygon
            className="cls-31"
            points="1038.41 0 1038.32 0.18 1038.2 0.36 1038.11 0.18 1037.99 0 1038.41 0"
          />
          <polygon
            className="cls-32"
            points="865.11 299.82 865.21 300 865 300 865.11 299.82"
          />
          <polygon
            className="cls-33"
            points="1038.2 0 1038.32 0.18 1038.2 0.36 1038.11 0.18 1038.2 0"
          />
          <polygon
            className="cls-23"
            points="1211.41 300 1210.99 300 1211.11 299.82 1211.2 299.64 1211.32 299.82 1211.41 300"
          />
          <polygon
            className="cls-31"
            points="1038.41 0 1038.32 0.18 1038.2 0.36 1038.11 0.18 1037.99 0 1038.41 0"
          />
          <polygon
            className="cls-34"
            points="1211.2 299.64 1211.32 299.82 1211.2 300 1211.11 299.82 1211.2 299.64"
          />
          <polygon
            className="cls-22"
            points="1384.41 0 1384.32 0.18 1384.2 0.36 1384.11 0.18 1383.99 0 1384.41 0"
          />
        </g>
      </g>
    </animated.svg>
  );
};

export default NewTest;
