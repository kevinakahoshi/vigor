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
  breakpoints: {
    values: {
      xs: 0,
      xssm: 350,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Dosis'],
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: 'url(/assets/images/brand-assets/poly-background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
        'div#root': {
          height: 'var(--app-height)',
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, textarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, select:-webkit-autofill, select:-webkit-autofill:hover, select:-webkit-autofill:focus': {
          WebkitBoxShadow: '0 0 0px 1000px #fff inset',
        },
        'input:-webkit-autofill::first-line': {
          transition: '.3s all',
          fontSize: '1.25rem',
          fontFamily: 'Dosis',
        },
      },
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          outlineWidth: '2px',
          '& input': {
            fontSize: '1.25rem',
          },
          '& fieldset': {
            borderWidth: '2px',
          },
          '&:not(.Mui-focused):hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(0 0 0 / 0.35)',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#4BBCC0',
          },
          '&.Mui-error.Mui-focused fieldset': {
            borderColor: '#f44336',
          },
        },
      },
    },
  },
});

export default themeStyles;
