import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { userActions } from '../actions';

// Views
import Home from '../views/Home';
import SignUp from '../views/SignUp';
import Dashboard from '../views/Dashboard';

// Theme
import VigorTheme from '../theme/VigorTheme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

  return (
    <VigorTheme>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </VigorTheme>
  );
};

export default App;
