import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

// Views
import Home from '../views/Home';
import Login from '../views/Login';

// Theme
import VigorTheme from '../theme/VigorTheme';

// Transitions
import componentTransitions from '../transitions/componentTransitions';

const App = () => {
  const fade = componentTransitions();

  return (
    <VigorTheme>
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames={fade}
            timeout={350}>
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
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </VigorTheme>
  );
};

export default App;
