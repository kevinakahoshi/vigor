import React, { useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

// Redux Actions
import actions from '../../actions/index';

// Components
import LoginModal from './LoginModal';
import LoginModalContent from './LoginModalContent';
import VigorLinkButtonWhite from '../../theme/custom-styles/whiteLinkButtonStyles';
import VigorSecondaryButton from '../../theme/custom-styles/secondaryButtonStyles';

const buttonWrapper = makeStyles(() => ({
  buttonWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
}));

const NavLoginSignUpButtons = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const styles = buttonWrapper();

  const handleClick = async () => {
    const response = await fetch('/api/users/get-user');
    const user = await response.json();
    if (user) {
      dispatch(actions.userActions.setUser(user));
    } else {
      setOpen(true);
    }
  };

  return (
    <Box className={styles.buttonWrapper}>
      <VigorLinkButtonWhite component={Link} to="/sign-up" size="large">
        Sign Up
      </VigorLinkButtonWhite>
      <VigorSecondaryButton onClick={handleClick} size="large">
        Login
      </VigorSecondaryButton>
      <LoginModal open={open} setOpen={setOpen}>
        <LoginModalContent />
      </LoginModal>
    </Box>
  );
};

export default NavLoginSignUpButtons;
