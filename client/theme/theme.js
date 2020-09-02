import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const mainTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: 'url(/assets/images/brand-assets/poly-background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }
    }
  }
});

export default mainTheme;
