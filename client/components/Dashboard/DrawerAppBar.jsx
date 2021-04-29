import React from 'react';
import clsx from 'clsx';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage: 'url(/assets/images/brand-assets/poly-background.svg)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const DrawerAppBar = ({ children, open }) => {
  const { appBar, appBarShift } = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(appBar, {
        [appBarShift]: open,
      })}
    >
      {children}
    </AppBar>
  );
};

export default DrawerAppBar;
