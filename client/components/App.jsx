import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { userActions } from '../actions';

// Views
import Home from '../views/Home';
import SignUp from '../views/SignUp';

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
      </Switch>
    </VigorTheme>
  );
};

export default App;
