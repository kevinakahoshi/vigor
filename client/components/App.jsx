import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

// Views
import Home from '../views/Home';
import SignUp from '../views/SignUp';
import Dashboard from '../views/Dashboard';

// Theme
import VigorTheme from '../theme/VigorTheme';
import VigorLogo from './Miscellaneous/Logo/VigorLogoTest';

const App = () => {
  const dispatch = useDispatch();
  const { fetching } = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(userActions.getUser());
  }, []);

  // if (fetching) {
  //   return <h1>Fetching</h1>;
  // }

  return (
    <VigorTheme>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/fetching" component={VigorLogo} />
      </Switch>
    </VigorTheme>
  );
};

export default App;
