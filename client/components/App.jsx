import React, { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from '../actions';

// Views
import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

// Theme
import VigorTheme from '../theme/VigorTheme';

const App = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

  // useEffect(() => {
  //   dispatch(userActions.clearMessage());
  // }, [location]);

  return (
    <VigorTheme>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </VigorTheme>
  );
};

export default App;
