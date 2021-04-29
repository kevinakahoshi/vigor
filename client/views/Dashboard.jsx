import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import SideDrawer from '../components/Dashboard/SideDrawer';

const useStyles = makeStyles(() => ({
  root: {
    background: '#ffffff',
    width: '100%',
  },
}));

const Dashboard = () => {
  const { root } = useStyles();
  const { loggedIn, fetching } = useSelector((state) => state.currentUser);
  const history = useHistory();

  useEffect(() => {
    if (!fetching && !loggedIn) history.push('/');
  }, [fetching]);

  if (fetching) return null;
  return (
    <div className={root}>
      <SideDrawer />
    </div>
  );
};

export default Dashboard;
