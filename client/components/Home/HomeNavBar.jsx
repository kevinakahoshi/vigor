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

const navStyles = makeStyles(theme => ({
  navBar: {
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: '1fr auto'
  },
  vigorIcon: {
    width: 'auto',
    height: '100%'
  },
  buttonWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1rem'
  }
}
));

const HomeNavBar = ({ vigorLogoWhite }) => {
  const styles = navStyles();

  return (
    <Box
      className={styles.navBar}>
      <img
        src={vigorLogoWhite}
        className={styles.vigorIcon} />
      <Box
        className={styles.buttonWrapper}>
        <VigorLinkButton
          component={Link}
          to="/sign-up"
          size="large">
          Sign Up
        </VigorLinkButton>
        <VigorSecondaryButton
          component={Link}
          to="/login"
          size="large">
          Login
        </VigorSecondaryButton>
      </Box>
    </Box>
  );
};

export default HomeNavBar;
