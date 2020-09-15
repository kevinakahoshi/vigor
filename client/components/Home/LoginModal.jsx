import React from 'react';
import {
  makeStyles,
  Modal
} from '@material-ui/core';

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

  return (
    <Modal
      open={true}
      className={styles.modal}>
      { children }
    </Modal>
  );
};

export default LoginModal;
