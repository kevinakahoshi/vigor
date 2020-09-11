import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

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
const themeStyles = createMuiTheme({
  typography: {
    fontFamily: [
      'Dosis'
    ]
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: 'url(/assets/images/brand-assets/poly-background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        },
        'div#root': {
          height: 'var(--app-height)'
        }
      }
    }
  }
});

export default themeStyles;
