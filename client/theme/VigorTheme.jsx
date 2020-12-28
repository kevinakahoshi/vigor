import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Basline Theme
import themeStyles from './custom-styles/themeStyles';

const VigorTheme = ({ children }) => (
  <ThemeProvider theme={themeStyles}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default VigorTheme;
