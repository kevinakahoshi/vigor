import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Arial'
        }
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider
      theme={lightTheme}
    >
      <h1>Rendered</h1>
    </ThemeProvider>
  );
};

export default App;
