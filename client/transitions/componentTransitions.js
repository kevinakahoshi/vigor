import { makeStyles } from '@material-ui/core';

const componentTransitions = makeStyles(() => ({
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
