import React, {
  useEffect,
  useState
} from 'react';
import {
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  animated,
  useTransition
} from 'react-spring';

const descriptions = [
  'Motivator',
  'Fitness Tracker',
  'Accountability App'
];

const fadeStyles = makeStyles(theme => ({
  fadeWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  fadeElement: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 400,
    textAlign: 'center'
  }
}
));

const WordCarousel = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(descriptions[index], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      mass: 1,
      tension: 150,
      duration: 300
    }
  });
  const styles = fadeStyles();

  useEffect(() => {
    const interval = setInterval(() => setIndex(index => (index + 1) % descriptions.length), 3000);
    return () => clearInterval(interval);
  }, [index]);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className={styles.fadeWrapper}
      style={props}>
      <Typography
        className={styles.fadeElement}
        variant="h2">
        { item }
      </Typography>
    </animated.div>
  ));
};

export default WordCarousel;
