import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import actions from '../actions/index';

// Views
import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

// Theme
import VigorTheme from '../theme/VigorTheme';

const App = () => {
  const dispatch = useDispatch();

  const onLoad = async () => {
    const response = await fetch('/api/users/get-user');
    const user = await response.json();
    if (user) {
      dispatch(actions.userActions.setUser(user));
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <VigorTheme>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </VigorTheme>
  );
};

export default App;
