import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line no-unused-vars
const componentTransitions = makeStyles((theme) => ({
  'fade-enter': {
    opacity: 0,
  },
  'fade-enter-active': {
    opacity: 1,
  },
  'fade-exit': {
    opacity: 1,
  },
  'fade-exit-active': {
    opacity: 0,
  },
}));

export default componentTransitions;
