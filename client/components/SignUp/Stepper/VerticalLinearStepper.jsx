import React, { useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Step,
  StepLabel,
  StepContent,
  Stepper,
  StepConnector,
} from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

// Components
import StepValidationCircle from './StepValidationCircle';
import VigorPrimaryButton from '../../../theme/custom-styles/primaryButtonStyles';
import VigorLinkButtonGrey from '../../../theme/custom-styles/greyLinkButtonStyles';

const useStyles = makeStyles(({ spacing, status: { error } }) => ({
  stepper: {
    padding: spacing(2),
  },
  stepLabel: {
    '& .MuiStepLabel-label.Mui-error': {
      ...error,
      color: 'transparent',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
    },
  },
  actionsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: spacing(0.5),
  },
  stepContent: {
    marginLeft: spacing(1),
    marginBottom: spacing(1),
  },
  stepConnector: {
    marginLeft: spacing(1),
    display: 'none',
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
  showPasswordReqs,
  validationChecks,
}) => {
  const {
    stepper,
    stepLabel,
    actionsContainer,
    stepContent,
    stepConnector,
  } = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const { message } = useSelector((state) => state.currentUser);
  const steps = useMemo(() => getSteps(), []);
  const validation = useMemo(() => Object.values(validationChecks), [
    validationChecks,
  ]);
  const credentials = useMemo(() => Object.values(signUpCredentials), [
    signUpCredentials,
  ]);

  const handleShowPasswordReqs = (step) => {
    if (step > 2) {
      if (!showPasswordReqs) setShowPasswordReqs(() => true);
    } else if (showPasswordReqs) setShowPasswordReqs(() => false);
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

  return (
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
            classes={{
              root: stepLabel,
            }}
            error={!validation[index]}
            StepIconComponent={StepValidationCircle}
            StepIconProps={{
              active: activeStep === index,
              valid: credentials[index] && validation[index],
              error: !validation[index],
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
              {index === steps.length - 1 ? (
                <VigorPrimaryButton type="submit" disabled={!!message}>
                  Submit
                </VigorPrimaryButton>
              ) : (
                <VigorPrimaryButton
                  onClick={handleNext}
                  disabled={!Object.values(signUpCredentials)[index]}
                >
                  Next
                </VigorPrimaryButton>
              )}
            </div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default VerticalLinearStepper;
