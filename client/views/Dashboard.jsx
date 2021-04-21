import { makeStyles } from '@material-ui/core';
import React from 'react';
import VigorLogo from '../components/Miscellaneous/Logo/VigorLogoTest';

const useStyles = makeStyles(() => ({
  root: {
    background: '#ffffff',
    height: '100%',
    width: '100%',
  },
}));

const Dashboard = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <VigorLogo />
    </div>
  );
};

export default Dashboard;
