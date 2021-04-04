import React, { createRef, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import LoginModal from '../Login/LoginModal';
import LoginModalContent from '../Login/LoginModalContent';
import VigorLinkButtonWhite from '../../../theme/custom-styles/whiteLinkButtonStyles';
import VigorSecondaryButton from '../../../theme/custom-styles/secondaryButtonStyles';

const buttonWrapperStyles = makeStyles(() => ({
  buttonWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem',
  },
}));

const NavLoginSignUpDesktop = () => {
  const [open, setOpen] = useState(false);
  const modalRef = createRef();
  const { buttonWrapper } = buttonWrapperStyles();

  const userSession = useSelector((state) => state.currentUser.loggedIn);
  const history = useHistory();

  const handleClick = () => {
    if (userSession) {
      history.push('/login');
    } else {
      setOpen(() => true);
    }
  };

  return (
    <Box className={buttonWrapper}>
      <VigorLinkButtonWhite component={Link} to="/sign-up" size="large">
        Sign Up
      </VigorLinkButtonWhite>
      <VigorSecondaryButton onClick={handleClick} size="large">
        Login
      </VigorSecondaryButton>
      <LoginModal open={open} setOpen={setOpen}>
        <LoginModalContent setOpen={setOpen} ref={modalRef} />
      </LoginModal>
    </Box>
  );
};

export default NavLoginSignUpDesktop;
