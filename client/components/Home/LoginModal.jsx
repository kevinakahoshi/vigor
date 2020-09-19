import React from 'react';
import {
  makeStyles,
  Modal
} from '@material-ui/core';
import {
  animated,
  useSpring
} from 'react-spring';

const modalStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(2.5)
    }
  }
}));

const LoginModal = ({ children }) => {
  const styles = modalStyles();

  const fadeStyles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div
      style={fadeStyles}>
      <Modal
        open={true}
        className={styles.modal}>
        { children }
      </Modal>
    </animated.div>
  );
};

export default LoginModal;
