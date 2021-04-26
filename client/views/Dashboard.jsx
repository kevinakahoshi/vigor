import { makeStyles } from '@material-ui/core';
import React from 'react';
import MiniDrawer from '../components/Dashboard/Drawer';

const useStyles = makeStyles(() => ({
  root: {
    background: '#ffffff',
    width: '100%',
  },
}));

const Dashboard = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <MiniDrawer />
    </div>
  );
};

export default Dashboard;
