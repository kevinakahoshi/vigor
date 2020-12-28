import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const VigorSecondaryButton = withStyles({
  root: {
    fontSize: '1.25rem',
    padding: '.5rem 3rem',
    border: 0,
    backgroundImage: 'linear-gradient(#ffffff, #ffffff)',
    boxShadow: '0rem .5rem 1rem rgba(0, 0, 0, .25)',
    '&:hover': {
      boxShadow: '0rem .25rem .5rem rgba(0, 0, 0, .25)',
    },
  },
  label: {
    backgroundImage: 'linear-gradient(45deg, #4BBCC0, #8AFFC7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})(Button);

export default VigorSecondaryButton;
