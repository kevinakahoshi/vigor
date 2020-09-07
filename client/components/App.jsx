import React from 'react';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import {
  CssBaseline
} from '@material-ui/core';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Views
import Home from '../views/Home';
import Login from '../views/Login';

// Font Assets
// import Dosis from './assets/fonts/Dosis.ttf';

// const dosis = {
//   fontFamily: 'Dosis',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   src: `
//     url(${Dosis}) format('truetype)
//   `
// };

// TODO: Update the font to match the wireframe
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto'
    ]
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          minHeight: '100%'
        },
        body: {
          backgroundImage: 'url(/assets/images/brand-assets/poly-background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100%'
        }
      }
    }
  }
});

const App = () => {

  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
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
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
