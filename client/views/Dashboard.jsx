import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const {
    loggedIn,
    user: { firstName, lastName },
  } = useSelector((state) => state.currentUser);

  const headingText = loggedIn ? `User: ${firstName} ${lastName}` : '';

  return <>{loggedIn && <h1>{headingText}</h1>}</>;
};

export default Dashboard;
