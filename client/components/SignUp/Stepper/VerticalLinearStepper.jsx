import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Step,
  StepLabel,
  StepContent,
  Stepper,
  StepConnector,
} from '@material-ui/core';

import StepValidationCircle from './StepValidationCircle';
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorLinkButtonGrey from '../../../theme/custom-styles/greyLinkButtonStyles';

const useStyles = makeStyles(({ spacing }) => ({
  stepper: {
    padding: spacing(2),
  },
  button: {},
  actionsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: spacing(0.5),
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

const VerticalLinearStepper = ({
  fields,
  signUpCredentials,
  setShowPasswordReqs,
}) => {
  const {
    stepper,
    button,
    actionsContainer,
    stepContent,
    stepConnector,
  } = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = useMemo(() => getSteps(), []);

  const handleShowPasswordReqs = (step) => {
    if (step > 2) {
      setShowPasswordReqs(() => true);
    } else {
      setShowPasswordReqs(() => false);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      handleShowPasswordReqs(nextStep);
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep - 1;
      handleShowPasswordReqs(nextStep);
      return nextStep;
    });
  };

  const connector = (
    <StepConnector
      classes={{
        root: stepConnector,
      }}
    />
  );

  // TODO: Handle the submission process and don't close the final field
  return (
    <>
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
                {index > 0 && (
                  <VigorLinkButtonGrey onClick={handleBack}>
                    Prev
                  </VigorLinkButtonGrey>
                )}
                <VigorPrimaryButton onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </VigorPrimaryButton>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default VerticalLinearStepper;
