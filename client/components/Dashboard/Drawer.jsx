import React, { useState } from 'react';
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
import DrawerAppBar from './DrawerAppBar';

const drawerWidth = 240;

const useStyles = makeStyles(
  ({ breakpoints, mixins, spacing, transitions, zIndex }) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: zIndex.drawer + 1,
      transition: transitions.create(['width', 'margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: transitions.create(['width', 'margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
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

const MiniDrawer = () => {
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
};

export default MiniDrawer;
