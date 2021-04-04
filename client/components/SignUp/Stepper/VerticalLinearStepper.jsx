import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Step,
  StepLabel,
  StepContent,
  Stepper,
  StepConnector,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import StepValidationCircle from './StepValidationCircle';

const useStyles = makeStyles(({ spacing }) => ({
  stepperWrapper: {
    width: '100%',
  },
  stepper: {
    padding: spacing(2),
  },
  button: {
    marginTop: spacing(1),
    marginRight: spacing(1),
  },
  actionsContainer: {
    marginBottom: spacing(2),
  },
  stepContent: {
    marginLeft: spacing(1),
  },
  stepConnector: {
    marginLeft: spacing(1),
  },
}));

const getSteps = () => [
  'Enter your first name',
  'Enter your last name',
  'Enter your email address',
  'Enter your password',
  'Re-enter your password',
];

const VerticalLinearStepper = ({ fields, signUpCredentials }) => {
  const {
    stepperWrapper,
    stepper,
    button,
    actionsContainer,
    stepContent,
    stepConnector,
  } = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = useMemo(() => getSteps(), []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const connector = (
    <StepConnector
      classes={{
        root: stepConnector,
      }}
    />
  );

  return (
    <div className={stepperWrapper}>
      <Stepper
        activeStep={activeStep}
        classes={{
          root: stepper,
        }}
        orientation="vertical"
        connector={connector}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={StepValidationCircle}
              StepIconProps={{
                active: activeStep === index,
                valid: Object.values(signUpCredentials)[index],
              }}
            >
              {label}
            </StepLabel>
            <StepContent
              classes={{
                root: stepContent,
              }}
            >
              {fields[index]}
              <div className={actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VerticalLinearStepper;
