import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const VigorLinkButtonGrey = withStyles({
  root: {
    fontSize: '1.25rem',
    padding: '.5rem 3rem',
    border: 0,
    color: '#cccccc',
  },
})(Button);

export default VigorLinkButtonGrey;
