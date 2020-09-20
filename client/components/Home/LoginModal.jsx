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
      padding: theme.spacing(2)
    }
  }
}));

const LoginModal = ({ children, open, setOpen }) => {
  const styles = modalStyles();

  return (
    <Modal
      className={styles.modal}
      open={open}
      onClose={() => setOpen(false)}>
      { children }
    </Modal>
  );
};

export default LoginModal;
