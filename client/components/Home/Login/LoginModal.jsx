import React from 'react';
import { makeStyles, Modal } from '@material-ui/core';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../actions';

const modalStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(2),
    },
  },
}));

const LoginModal = ({ children, open, setOpen }) => {
  const styles = modalStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.currentUser.message);

  const onClose = () => {
    setOpen(() => false);
    if (error) {
      dispatch(userActions.clearMessage());
    }
  };

  return (
    <Modal className={styles.modal} open={open} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default LoginModal;
