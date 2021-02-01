import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

// Views
import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

// Theme
import VigorTheme from '../theme/VigorTheme';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.currentUser);

  const clearMessageHandler = () => {
    if (message) {
      dispatch(userActions.clearMessage());
    }
  };

  useEffect(() => {
    dispatch(userActions.getUser());
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
