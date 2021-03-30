import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import clsx from 'clsx';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    padding: '.5rem',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

const StepCircle = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

export default StepCircle;
