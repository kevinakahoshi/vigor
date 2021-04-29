import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';

const drawerWidth = 240;

const useStyles = makeStyles(
  ({ breakpoints, mixins, spacing, transitions }) => ({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: transitions.create('width', {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: spacing(7) + 1,
      [breakpoints.up('sm')]: {
        width: spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: spacing(0, 1),
      ...mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: spacing(3),
    },
  })
);

const SideDrawer = () => {
  const {
    content,
    direction,
    drawer,
    drawerOpen,
    drawerClose,
    hide,
    menuButton,
    root,
    toolbar,
  } = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => setOpen(() => true);
  const handleDrawerClose = () => setOpen(() => false);

  return (
    <div className={root}>
      <DrawerAppBar open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(menuButton, {
              [hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </DrawerAppBar>
      <Drawer
        variant="permanent"
        className={clsx(drawer, {
          [drawerOpen]: open,
          [drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [drawerOpen]: open,
            [drawerClose]: !open,
          }),
        }}
      >
        <div className={toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
      </Drawer>
      <main className={content}>
        <div className={toolbar} />
        <Typography paragraph />
      </main>
    </div>
  );
};

export default SideDrawer;
