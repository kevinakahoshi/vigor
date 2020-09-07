import {
  withStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const VigorLinkButton = withStyles({
  root: {
    padding: '.5rem 3rem',
    border: 0,
    color: '#ffffff'
  }
})(Button);

export default VigorLinkButton;
