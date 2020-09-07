import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Views
import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

// Theme
import VigorTheme from '../theme/VigorTheme';

// Transitions
// import componentTransitions from '../transitions/componentTransitions';

const App = () => {
  // const fade = componentTransitions();

  return (
    <VigorTheme>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            render={props =>
              <Home />
            }/>
          <Route
            exact path="/login"
            render={props =>
              <Login />
            } />
          <Route
            exact path="/sign-up"
            render={props =>
              <SignUp />
            } />
        </Switch>
      </BrowserRouter>
    </VigorTheme>
  );
};

export default App;
