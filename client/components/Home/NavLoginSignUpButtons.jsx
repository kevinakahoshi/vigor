import React, {
  useState
} from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';

// Components
import LoginModal from './LoginModal';
import LoginModalContent from './LoginModalContent';
import VigorLinkButtonWhite from '../../theme/whiteLinkButtonStyles';
import VigorSecondaryButton from '../../theme/secondaryButtonStyles';

const buttonWrapper = makeStyles(theme => ({
  buttonWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem'
  }
}
));

const NavLoginSignUpButtons = () => {
  const [open, setOpen] = useState(false);
  const styles = buttonWrapper();

  return (
    <Box
      className={styles.buttonWrapper}>
      <VigorLinkButtonWhite
        component={Link}
        to="/sign-up"
        size="large">
          Sign Up
      </VigorLinkButtonWhite>
      <VigorSecondaryButton
        onClick={() => setOpen(true)}
        size="large">
          Login
      </VigorSecondaryButton>
      <LoginModal
        open={open}
        setOpen={setOpen}>
        <LoginModalContent />
      </LoginModal>
    </Box>
  );
};

export default NavLoginSignUpButtons;
