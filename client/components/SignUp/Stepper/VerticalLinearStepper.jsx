import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

import StepValidationCircle from './StepValidationCircle';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: spacing(1),
    marginRight: spacing(1),
  },
  actionsContainer: {
    marginBottom: spacing(2),
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
  const { root, button, actionsContainer } = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = useMemo(() => getSteps(), []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={root}>
      <Stepper activeStep={activeStep} orientation="vertical">
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
            <StepContent>
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
