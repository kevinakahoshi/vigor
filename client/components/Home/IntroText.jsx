import React, {
  useEffect,
  useState
} from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  animated,
  config,
  useTransition
} from 'react-spring';

// Components
import VigorLogoWhite from '../Miscellaneous/VigorLogoWhite';

// Utilities
// import imagePath from '../../utilities/imagePath';

// const backgroundLogo = imagePath('Vigor-Logo-White.svg');

const textStyles = makeStyles(theme => ({
  outerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: '1rem',
    position: 'relative'
  },
  heading: {
    color: '#ffffff',
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  subheading: {
    color: '#ffffff',
    fontSize: '1.75rem',
    fontWeight: 400,
    textAlign: 'center'
  },
  fadeWrapper: {
    position: 'relative'
  },
  fadeElement: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  vigorLogo: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    opacity: '.25',
    left: 0,
    top: 0
  }
}
));

const IntroText = () => {
  const styles = textStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const descriptionWords = [
    'Motivator',
    'Fitness Tracker',
    'Accountability App'
  ];

  const cycleWords = () => {
    if (currentIndex === descriptionWords.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const transitions = useTransition(descriptionWords[currentIndex], word => word, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  useEffect(() => {
    const timer = setInterval(() => {
      cycleWords();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <Box
      className={styles.outerBox}>
      <Container
        className={styles.container}
        maxWidth="xs">
        <Typography
          className={styles.heading}
          variant="h1">
          Vigor
        </Typography>
        <Box
          className={styles.fadeWrapper}>
          { transitions.map(({ item, props, key }) =>
            <animated.div
              className={styles.fadeElement}
              key={key}
              style={props}>
              <Typography
                className={styles.subheading}
                variant="h2">
                { item }
              </Typography>
            </animated.div>
          )}
        </Box>
        <VigorLogoWhite
          classes={styles.vigorLogo} />
      </Container>
    </Box>
  );
};

export default IntroText;
