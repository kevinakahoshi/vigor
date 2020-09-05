import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Views
import Home from '../views/Home';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto'
    ]
  }
});

const App = () => {

  return (
    <ThemeProvider
      theme={theme}
    >
      <Home />
    </ThemeProvider>
  );
};

export default App;
