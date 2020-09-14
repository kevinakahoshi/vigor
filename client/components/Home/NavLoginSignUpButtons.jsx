import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import {
  Link
} from 'react-router-dom';

// Components
import VigorLinkButton from '../../theme/linkButtonStyles';
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
  const styles = buttonWrapper();

  return (
    <Box
      className={styles.buttonWrapper}>
      <VigorLinkButton
        component={Link}
        to="/sign-up"
        size="large">
      Sign Up
      </VigorLinkButton>
      <VigorSecondaryButton
        onClick={() => alert('Login Modal')}
        size="large">
      Login
      </VigorSecondaryButton>
    </Box>
  );
};

export default NavLoginSignUpButtons;
